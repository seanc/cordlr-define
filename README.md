# cordlr-definition [![NPM version](https://badge.fury.io/js/cordlr-definition.svg)](https://npmjs.org/package/cordlr-definition) [![Build Status](https://travis-ci.org/seanc/cordlr-definition.svg?branch=master)](https://travis-ci.org/seanc/cordlr-definition)

> Cordlr word definition plugin

## Installation

```sh
$ cordlr install cordlr-define
```

Then add it to your config.

```js
{
  "plugins": [
    "cordlr-define"
  ],
  "define": {
    "format": "```{{word}} | {{partofspeech}}\n\t{{definition}}```" // How should list entries be formatted,
    "unknown": "No definitions found for the word `{{query}}`" // How should we reply if no definitions can be found.
    "max": 3 // How many definitions should we send, use 'all' to send all available ones
  }
}
```

## Usage

```
define <word>
```

## License

MIT © [Sean Wilson](https://imsean.me)
