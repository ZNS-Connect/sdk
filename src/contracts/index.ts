import { Chain } from '../chain';
import TLD from '../tld';
import ABI from './abi'; // NOTE: same ABI for all contracts

const addresses: Record<Chain, Record<TLD, string>> = {
  [Chain.PolygonMumbai]: {
    [TLD.Zeta]: '0x3b7558d441824be63B797e919974897A1454D27b',
    [TLD.Zero]: '0xeD5fC231Fd428F44B602B77Ea7ECc53b2bB0f034',
  },
  [Chain.Polygon]: {
    [TLD.Zeta]: '0x5dEeDcCf0e5B4BbA5cA3cA0e213aB1aFfFfFfFfF', // FIXME: placeholder
    [TLD.Zero]: '0x5dEeDcCf0e5B4BbA5cA3cA0e213aB1aFfFfFfFfF', // FIXME: placeholder
  },
};

export { addresses, ABI };
