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
```

### References

Incredible [Medium article](https://medium.freecodecamp.org/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78) by [Freecodecamp](https://medium.freecodecamp.org) written by [Jonathan Wood @bamblehorse]()