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
});
