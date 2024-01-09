import { http } from 'viem';
import { createZnsPublicClient, Chain } from '../src';

describe('client', () => {
  it('should create a client', () => {
    const result = createZnsPublicClient({
      chain: Chain.PolygonMumbai,
      transport: http(),
    });

    expect(result).toBeDefined();
  });
});
