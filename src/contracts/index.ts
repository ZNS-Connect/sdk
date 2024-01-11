import { Chain } from '../chain';
import TLD from '../tld';
import ABI from './abi'; // NOTE: same ABI for all contracts

const addresses: Record<Chain, Record<TLD, string>> = {
  [Chain.PolygonMumbai]: {
    [TLD.Zeta]: '0x3b7558d441824be63B797e919974897A1454D27b',
    [TLD.Zero]: '0x5dEeDcCf0e5B4BbA5cA3cA0e213aB1aFfFfFfFfF', // FIXME: placeholder
  },
  [Chain.Polygon]: {
    [TLD.Zeta]: '0x5dEeDcCf0e5B4BbA5cA3cA0e213aB1aFfFfFfFfF', // FIXME: placeholder
    [TLD.Zero]: '0x5dEeDcCf0e5B4BbA5cA3cA0e213aB1aFfFfFfFfF', // FIXME: placeholder
  },
};

export { addresses, ABI };
