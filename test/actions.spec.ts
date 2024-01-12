import { http, zeroAddress } from 'viem';

import { Chain, createZnsPublicClient } from '../src';

describe('actions', () => {
  const client = createZnsPublicClient({
    chain: Chain.PolygonMumbai,
    transport: http(),
  });

  it('should lookup a domain', async () => {
    const result = await client.lookup({
      name: 'syed',
      tld: 'zeta',
    });

    expect(result.name).toEqual('syed');
    expect(result.owner).not.toEqual(zeroAddress);
  });

  it('should reverse lookup an address', async () => {
    const result = await client.reverseLookup({
      address: '0x137645BC5f1A8efB2BAB22FAb6829DF8f12847BA',
      tld: 'zeta',
    });

    expect(result.address).toEqual(
      '0x137645BC5f1A8efB2BAB22FAb6829DF8f12847BA'
    );
    expect(result.domains.length).toBeGreaterThan(0);
    expect(result.primaryDomain).toBeDefined();
  });
});
