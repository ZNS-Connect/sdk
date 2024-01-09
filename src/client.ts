import {
  createClient,
  type Transport,
  type ClientConfig,
  type Chain,
} from 'viem';
import { Chain as ZnsChain } from './chain';

export type ZnsPublicClientConfig<
  TTransport extends Transport = Transport,
  TChain extends Chain = Chain,
> = Omit<ClientConfig<TTransport, TChain>, 'chain'> & {
  chain: ZnsChain;
};

export function createZnsPublicClient({
  chain,
  ...params
}: ZnsPublicClientConfig) {
  return createClient({
    chain: ZnsChain.toViemChain(chain),
    ...params,
  });
}
