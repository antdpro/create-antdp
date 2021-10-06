<p align="center">
  <a href="https://github.com/antdpro/antdp">
    <img width="200" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
  </a>
</p>
<!--rehype:style=min-height: 380px; display: flex; justify-content: center; align-items: center;-->

<p align="center">
  <a href="https://github.com/antdpro/create-antdp/actions/workflows/ci.yml">
    <img alt="Build & Deploy" src="https://github.com/antdpro/create-antdp/actions/workflows/ci.yml/badge.svg">
  </a>
  <a href="https://antdpro.github.io/create-antdp/lcov-report/">
    <img alt="Coverage Status" src="https://antdpro.github.io/create-antdp/badges.svg">
  </a>
  <a href="https://www.npmjs.com/package/create-antdp">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/create-antdp.svg?style=flat">
  </a>
  <a href="https://uiwjs.github.io/npm-unpkg/#/pkg/create-antdp/file/README.md">
    <img alt="Open in unpkg" src="https://img.shields.io/badge/Open%20in-unpkg-blue">
  </a>
  <a href="https://www.npmjs.com/package/create-antdp">
    <img src="https://img.shields.io/npm/v/create-antdp.svg">
  </a>
</p>

Creates a [`antdp`](https://github.com/antdpro/antdp) application using the command line.

## Usage

```shell
# npm 6.x
$ npm init antdp my-app --example antdp-base
# npm 7+, extra double-dash is needed:
$ npm init antdp my-app -- --example antdp-base

$ yarn create antdp [appName]
# or npm
$ npm create antdp my-app
# or npx
$ npx create-antdp my-app
```

## Command Help

Below is a help of commands you might find useful. The example download is from https://antdpro.github.io/antdp/zip/

```bash
Usage: create-antdp <app-name> [options] [--help|h]

Options:

  --version, -v   Show version number
  --help, -h      Displays help information.
  --output, -o    Output directory.
  --example, -e   Example from: http://antdpro.github.io/antdp/, default: "antdp-base"
  --path, -p      Specify the download target git address.
                    default: "http://antdpro.github.io/antdp/"

Example:

  yarn create antdp appName
  npx create-antdp my-app
  npm create antdp my-app
  npm create antdp my-app -f
  npm create antdp my-app -p https://antdpro.github.io/antdp/zip/

Copyright 2021
```

## License

[MIT © Kenny Wong](https://github.com/jaywcjlove)
