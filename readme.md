# NPM PACKAGE - TESTING

[![npm](https://img.shields.io/npm/v/@riouxjean/test.svg)](https://github.com/jelecool/npm_test)

Testing with : Removes all space from string

## Install

```
$ npm install @riouxjean/test
```

## Usage

```js
const tiny = require("@riouxjean/test");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1