import { Client } from 'viem';

import TLD from '../tld';

export type TLookupParams = {
  name: string;
  tld: TLD;
};

export default function lookup(client: Client, params: TLookupParams) {
  console.log(params);
}
