import { Chain } from '../chain';
import { ZnsPublicClient } from '../client';
import { ABI, addresses } from '../contracts';
import { LookupInvalid } from '../errors';
import TLD from '../tld';

type DomainMapping = {
  name: string;
  tokenId: number;
};

export type TReverseLookupParams = {
  address: string;
  tld: `${TLD}`;
};

export type TReverseLookupResult = {
  domains: DomainMapping[];
  address: string;
  primaryDomain: DomainMapping | undefined;
};

export default async function reverseLookup(
  client: ZnsPublicClient,
  params: TReverseLookupParams
): Promise<TReverseLookupResult> {
  const chain = client.chain.id as Chain;
  const contractAddress = addresses[chain][params.tld];

  const result = await client.readContract({
    address: contractAddress as `0x${string}`,
    abi: ABI,
    functionName: 'userLookupByAddress',
    args: [params.address as `0x${string}`],
  });

  if (result.allOwnedDomains.length === 0) {
    throw LookupInvalid('No domains found for address');
  }

  // Resolve domain token IDs to names
  const domains = await Promise.all(
    result.allOwnedDomains.map(async id => {
      const tokenId = Number(id);

      const result = await client.readContract({
        address: contractAddress as `0x${string}`,
        abi: ABI,
        functionName: 'registryLookupById',
        args: [BigInt(tokenId)],
      });

      return {
        name: result.domainName,
        tokenId,
      };
    })
  );

  return {
    domains,
    address: params.address,
    primaryDomain: domains.find(
      domain => domain.tokenId === Number(result.primaryDomain)
    ),
  };
}
