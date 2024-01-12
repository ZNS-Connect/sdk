import { type Prettify } from 'viem/chains';

import { ZnsPublicClient } from '../client';
import lookup, { TLookupParams, TLookupResult } from './lookup';
import reverseLookup, {
  TReverseLookupParams,
  TReverseLookupResult,
} from './reverse-lookup';

export type ZnsPublicActions = {
  lookup: (params: Prettify<TLookupParams>) => Promise<TLookupResult>;
  reverseLookup: (
    params: Prettify<TReverseLookupParams>
  ) => Promise<TReverseLookupResult>;
};

export function znsPublicActions(client: ZnsPublicClient): ZnsPublicActions {
  return {
    lookup: params => lookup(client, params),
    reverseLookup: params => reverseLookup(client, params),
  };
}

export { lookup };
