/* eslint-disable @typescript-eslint/no-namespace */
import { polygon, polygonMumbai, Chain as ViemChain } from 'viem/chains';

export enum Chain {
  Polygon,
  PolygonMumbai,
}

export namespace Chain {
  export function toViemChain(chain: Chain): ViemChain {
    switch (chain) {
      case Chain.Polygon:
        return polygon;
      case Chain.PolygonMumbai:
        return polygonMumbai;
    }
  }
}
