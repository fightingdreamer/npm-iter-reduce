# iter-reduce

## Description

Missing reduce function for iterator based input, similar to Array.reduce.

Second implementation can better handle cases of input with length 0 or 1.

## Install

```bash
bun add @fightingdreamer/iter-reduce
```

## Usage

```js
import {reduceWithInitial} from '@fightingdreamer/iter-reduce'

const vector = [1,2,3][Symbol.iterator]()
const result = reduceWithInitial(vector, (r, v) => r + v, 3)
const expect = 9
console.assert(result == expect)
```

```js
import {reduceWithDefault} from '@fightingdreamer/iter-reduce'

const vector = [1][Symbol.iterator]()
const result = reduceWithDefault(vector, (r, v) => Math.min(r, v), 0)
const expect = 1
console.assert(result == expect)
```

## Usage (node / commonjs)

```js
const {reduceWithInitial} = require('@fightingdreamer/iter-reduce')

const vector = [1,2,3][Symbol.iterator]()
const result = reduceWithInitial(vector, (r, v) => r + v, 3)
const expect = 9
assert(result == expect)
```

```js
const {reduceWithDefault} = require('@fightingdreamer/iter-reduce')

const vector = [1][Symbol.iterator]()
const result = reduceWithDefault(vector, (r, v) => Math.min(r, v), 0)
const expect = 1
assert(result == expect)
```

## Functions

```ts
function reduceWithInitial<T, R>(
  iterator: Iterable<T>,
  callbackFn: (accumulator: R, currentValue: T, currentIndex: number) => R,
  initialValue: R,
): R
```

For inputs of any length will call callbackFn on every item,
using initialValue as accumulator on first call.

This function is best suited for merging input into one item, or
creating collection from input reusing already collected items.

```ts
function reduceWithDefault<T>(
  iterator: Iterable<T>,
  callbackFn: (accumulator: T, currentValue: T, currentIndex: number) => T,
  defaultValue: T,
): T
```

For inputs of length >= 2 will call callbackFn on every item except first one,
using first item as accumulator on first call.

For inputs of length == 1 will not call callbackFn and return first item.

For inputs of length == 0 will not call callbackFn and return defaultValue item.

This function is best suited for cases when initial value can easily distort result,
eg. finding `Math.min` from `Iterable<number>`.
