# ZNS Connect Developer SDK

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> SDK for lookup up and interacting with ZNS domains

## Install

```bash
npm install @znsconnect/sdk
```

## Usage

### Creating a client

```ts
import { http } from 'viem';
import { createZnsPublicClient, Chain } from '@znsconnect/sdk';

const client = createZnsPublicClient({
  chain: Chain.PolygonMumbai,
  transport: http(),
});
```

### Lookup a domain

```ts
const result = client.lookup({
  name: 'syed',
  tld: 'zeta',
});

console.log(result.owner); //= 0x137645BC5f1A8efB2BAB22FAb6829DF8f12847BA
```

### Reverse Lookup a domain

```ts
const result = client.reverseLookup({
  address: '0x137645BC5f1A8efB2BAB22FAb6829DF8f12847BA',
  tld: 'zeta',
});

console.log(result.primaryDomain); //= { name: "syed', tokenId: 1 }
```

[build-img]: https://github.com/ZNS-Connect/sdk/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/ZNS-Connect/sdk/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/@znsconnect/sdk
[downloads-url]: https://www.npmtrends.com/@znsconnect/sdk
[npm-img]: https://img.shields.io/npm/v/@znsconnect/sdk
[npm-url]: https://www.npmjs.com/package/@znsconnect/sdk
[issues-img]: https://img.shields.io/github/issues/ZNS-Connect/sdk
[issues-url]: https://github.com/ZNS-Connect/sdk/issues
[codecov-img]: https://codecov.io/gh/ZNS-Connect/sdk/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/ZNS-Connect/sdk
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
