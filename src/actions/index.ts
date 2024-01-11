import { type Transport, type Chain, type Account, type Client } from 'viem';
import { type Prettify } from 'viem/chains';

import lookup, { TLookupParams } from './lookup';

export type ZnsPublicActions = {
  lookup: (params: Prettify<TLookupParams>) => void;
};

export function znsPublicActions<
  TTransport extends Transport = Transport,
  TChain extends Chain = Chain,
  TAccount extends Account | undefined = Account | undefined,
>(client: Client<TTransport, TChain, TAccount>): ZnsPublicActions {
  return {
    lookup: params => lookup(client, params),
  };
}

export { lookup };
