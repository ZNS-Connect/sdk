import { type Transport, type Chain, type Account, type Client } from 'viem';

import lookup from './lookup';

export type ZnsPublicActions = {
  lookup: () => void;
};

export function znsPublicActions<
  TTransport extends Transport = Transport,
  TChain extends Chain = Chain,
  TAccount extends Account | undefined = Account | undefined,
>(client: Client<TTransport, TChain, TAccount>): ZnsPublicActions {
  return {
    lookup: () => lookup(client),
  };
}

export { lookup };
