#!/usr/bin/env node

import minimist from 'minimist';
import { create } from 'create-kkt';

async function run(): Promise<void> {
  try {
    const argvs = minimist(process.argv.slice(2), {
      alias: {
        output: 'o',
        force: 'f',
        path: 'p',
        example: 'e',
      },
      default: {
        path: 'https://antdpro.github.io/antdp/zip/',
        output: '.',
        force: false,
        example: 'antdp-base',
      },
    });
    if (argvs.h || argvs.help) {
      console.log(helpCli);
      return;
    }
    const { version } = require('../package.json');
    if (argvs.v || argvs.version) {
      console.log(`\n create-antdp v${version}\n`);
      return;
    }
    argvs.appName = argvs._[0];
    argvs.example = argvs.e = String(argvs.example).toLocaleLowerCase();
    create(argvs, helpExample);
  } catch (error) {
    console.log(`\x1b[31m${error.message}\x1b[0m`);
    console.log(error);
    process.exit(1);
  }
}

export const helpExample: string = `Example:

      \x1b[35myarn\x1b[0m create antdp \x1b[33mappName\x1b[0m
      \x1b[35mnpx\x1b[0m create-antdp \x1b[33mmy-app\x1b[0m
      \x1b[35mnpm\x1b[0m create antdp \x1b[33mmy-app\x1b[0m
      \x1b[35mnpm\x1b[0m create antdp \x1b[33mmy-app\x1b[0m -f
      \x1b[35mnpm\x1b[0m create antdp \x1b[33mmy-app\x1b[0m -p \x1b[34mhttp://antdpro.github.io/antdp/\x1b[0m
`;

export const helpCli: string = `
    Usage: create-antdp <app-name> [options] [--help|h]

    Options:

      --version, -v  Show version number
      --help, -h     Displays help information.
      --output, -o   Output directory.
      --example, -e  Example from: \x1b[34mhttp://antdpro.github.io/antdp/ \x1b[0m , default: "antdp-base"
      --path, -p     Specify the download target git address. default: "\x1b[34mhttp://antdpro.github.io/antdp/ \x1b[0m"
    
    ${helpExample}
    
    Copyright 2021

`;

try {
  run();
} catch (error) {
  console.log(`\x1b[31m${error.message}\x1b[0m`);
  console.log(error);
  process.exit(1);
}
