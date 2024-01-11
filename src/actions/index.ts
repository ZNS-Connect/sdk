import { type Prettify } from 'viem/chains';

import lookup, { TLookupParams, TLookupResult } from './lookup';
import { ZnsPublicClient } from '../client';

export type ZnsPublicActions = {
  lookup: (params: Prettify<TLookupParams>) => Promise<TLookupResult>;
};

export function znsPublicActions(client: ZnsPublicClient): ZnsPublicActions {
  return {
    lookup: params => lookup(client, params),
  };
}

export { lookup };
