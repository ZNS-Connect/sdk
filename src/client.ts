import {
  createClient,
  type Transport,
  type ClientConfig,
  type Chain,
  type Client,
  type PublicRpcSchema,
  publicActions,
  PublicActions,
} from 'viem';
import { Prettify } from 'viem/chains';

import { Chain as ZnsChain } from './chain';
import { znsPublicActions, ZnsPublicActions } from './actions';

export type ZnsPublicClientConfig<
  TTransport extends Transport = Transport,
  TChain extends Chain = Chain,
> = Omit<ClientConfig<TTransport, TChain>, 'chain'> & {
  chain: ZnsChain;
};

export type ZnsPublicClient<
  TTransport extends Transport = Transport,
  TChain extends Chain = Chain,
> = Prettify<
  Client<
    TTransport,
    TChain,
    undefined,
    PublicRpcSchema,
    PublicActions & ZnsPublicActions
  >
>;

export function createZnsPublicClient<
  TTransport extends Transport = Transport,
  TChain extends Chain = Chain,
>({
  chain,
  ...params
}: ZnsPublicClientConfig<TTransport, TChain>): ZnsPublicClient<
  TTransport,
  TChain
> {
  return createClient({
    chain: ZnsChain.toViemChain(chain) as TChain,
    ...params,
    account: undefined,
  })
    .extend(publicActions)
    .extend(znsPublicActions);
}
