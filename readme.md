# NPM PACKAGE - TESTING

[![npm](https://img.shields.io/npm/v/@riouxjean/test.svg)](https://github.com/jelecool/npm_test)
[![npm](https://img.shields.io/npm/dt/@riouxjean/test.svg?style=flat-square)](https://www.npmjs.com/package/@riouxjean/test)
[![GitHub](https://img.shields.io/github/license/jelecool/npm_test.svg?style=flat-square)](https://github.com/jelecool/npm_test)



Testing with : Removes all space from string

## Install

```
$ npm install @riouxjean/test
```

## Usage

```js
const test = require("@riouxjean/test");

test("GOOGL");
// => Position {
//  earnings: 1228000000,
//  outstanding: 318100000,
//  revenue: 39403000000,
//  cashs: 2240000000,
//  div: -505000000,
//  liabilities: 9147000000,
//  intangibleassets: undefined,
//  totalassets: 13856000000,
//  shareprice: 49.15 } 

test(1423);
//=> I need a string!
```

### References

Incredible [Medium article](https://medium.freecodecamp.org/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78) by [Freecodecamp](https://medium.freecodecamp.org) written by [Jonathan Wood @bamblehorse]()