# rundef

Remove `undefined` properties from object.

[![Build Status](https://travis-ci.org/d4nyll/rundef.svg?branch=master)](https://travis-ci.org/d4nyll/rundef) [![codecov](https://codecov.io/gh/d4nyll/rundef/branch/master/graph/badge.svg)](https://codecov.io/gh/d4nyll/rundef) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/5d03700550e441c59d343b1af0a8e783)](https://www.codacy.com/app/d4nyll/rundef?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=d4nyll/rundef&amp;utm_campaign=Badge_Grade) [![CodeFactor](https://www.codefactor.io/repository/github/d4nyll/rundef/badge)](https://www.codefactor.io/repository/github/d4nyll/rundef) [![Test Coverage](https://api.codeclimate.com/v1/badges/104604b0609a8722f8b6/test_coverage)](https://codeclimate.com/github/d4nyll/rundef/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/104604b0609a8722f8b6/maintainability)](https://codeclimate.com/github/d4nyll/rundef/maintainability) [![NSP Status](https://nodesecurity.io/orgs/d4nyll/projects/d5c67ec9-8c1b-4aef-8971-fe60572adc08/badge)](https://nodesecurity.io/orgs/d4nyll/projects/d5c67ec9-8c1b-4aef-8971-fe60572adc08) [![Known Vulnerabilities](https://snyk.io/test/github/d4nyll/rundef/badge.svg)](https://snyk.io/test/github/d4nyll/rundef) [![Greenkeeper badge](https://badges.greenkeeper.io/d4nyll/rundef.svg)](https://greenkeeper.io/) 
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fd4nyll%2Frundef.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fd4nyll%2Frundef?ref=badge_shield)

**N.B.** Does not remove `null` or falsy values, just `undefined`.

## Install

[![NPM](https://nodei.co/npm/rundef.png?compact=true)](https://nodei.co/npm/rundef/)

```
$ npm install rundef
$ yarn add rundef
```

## Usage

```
const rundef = require('rundef');
import rundef from 'rundef';
```

_For the most accurate examples, see the `test.js` file_

### Basic

```
const input = {
  a: undefined,
  b: 1
}

rundef(input); // { b: 1 }
```

### Advanced

`rundef` supports two options:

* `mutate` _boolean_ - if truthy, the original object will be mutated; if falsy, a new object will be constructed and returned. Defaults to `false`
* `recursive` _boolean | int_ - whether `rundef` should recursively process nested objects. If it's an integer, it will specify the number of nested layers, or levels, to process. If it is set to `true`, it will recursively process all layers. Defaults to `0`, which is equivalent to `false`.

```
const input = {
  a: undefined,     // Level 0
  b: {
    c: 1,
    d: undefined,   // Level 1
    e: {
      f: undefined  // Level 2
    }
  }
}

const output = rundef(
  input,
  false, // mutate - whether to mutate the original object or return a new one
  1,     // recursive - whether to apply recursively
);

output;

{                   // Level 0
  b: {
    c: 1,           // Level 1
    e: {
      f: undefined  // Level 2 - Not removed as level 1 was specified
    }
  }
}

```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fd4nyll%2Frundef.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fd4nyll%2Frundef?ref=badge_large)
