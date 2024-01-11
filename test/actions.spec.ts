import { http } from 'viem';

import { Chain, createZnsPublicClient } from '../src';

describe('actions', () => {
  const client = createZnsPublicClient({
    chain: Chain.PolygonMumbai,
    transport: http(),
  });

  it('should lookup a domain', () => {
    const result = client.lookup({
      name: 'syed',
      tld: 'zeta',
    });

    expect(result).toBeUndefined();
  });
});
