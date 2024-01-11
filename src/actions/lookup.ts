import { Chain } from '../chain';
import { ZnsPublicClient } from '../client';
import { ABI, addresses } from '../contracts';
import { LookupInvalid } from '../errors';
import TLD from '../tld';

export type TLookupParams = {
  name: string;
  tld: `${TLD}`;
};

export type TLookupResult = {
  owner: string;
  name: string;
  length: number;
  expires: Date;
};

export default async function lookup(
  client: ZnsPublicClient,
  params: TLookupParams
): Promise<TLookupResult> {
  const chain = client.chain.id as Chain;
  const address = addresses[chain][params.tld];

  const result = await client.readContract({
    address: address as `0x${string}`,
    abi: ABI,
    functionName: 'registryLookupByName',
    args: [params.name],
  });

  if (!result.domainName) {
    throw new LookupInvalid('Name not found');
  }

  return {
    owner: result.owner,
    name: result.domainName,
    length: result.lengthOfDomain,
    expires: new Date(Number(result.expirationDate) * 1000),
  };
}
