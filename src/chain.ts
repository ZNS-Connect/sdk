/* eslint-disable @typescript-eslint/no-namespace */
import { polygon, polygonMumbai } from 'viem/chains';

export enum Chain {
  Polygon,
  PolygonMumbai,
}

export namespace Chain {
  export function toViemChain(chain: Chain) {
    switch (chain) {
      case Chain.Polygon:
        return polygon;
      case Chain.PolygonMumbai:
        return polygonMumbai;
    }
  }
}
