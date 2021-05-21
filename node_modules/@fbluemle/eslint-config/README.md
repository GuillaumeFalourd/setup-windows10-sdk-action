# eslint-config-fbluemle

[![ci][1]][2]
[![npm version][4]][5]
[![Dependency Status][7]][8]

## Description

A simple, general purpose, zero-dependency ESLint config with rules based on
[eslint-config-react-native-community][3]. These are just the **core ESLint
rules**, with all dependencies on other configs/plugins removed.

## Installation

```sh
npm i -D eslint @fbluemle/eslint-config
```

or

```sh
yarn add -D eslint @fbluemle/eslint-config
```

## Usage

Add to your ESLint config (`.eslintrc[.js]`, or `eslintConfig` field in `package.json`):

```js
module.exports = {
  extends: '@fbluemle',
};
```

This base config only defines the `es6` env. Depending on your project, you
probably want to [specify other environments][6] (e.g. `browser` or `node`) in
addition.

## License

MIT

[1]: https://github.com/fbluemle/eslint-config-fbluemle/workflows/ci/badge.svg
[2]: https://github.com/fbluemle/eslint-config-fbluemle/actions
[3]: https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community
[4]: https://img.shields.io/npm/v/@fbluemle/eslint-config.svg
[5]: https://www.npmjs.com/package/@fbluemle/eslint-config
[6]: https://eslint.org/docs/user-guide/configuring#specifying-environments
[7]: https://david-dm.org/fbluemle/eslint-config-fbluemle.svg
[8]: https://david-dm.org/fbluemle/eslint-config-fbluemle
