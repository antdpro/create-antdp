import minimist from 'minimist';
import { create } from 'create-kkt';
import path from 'path';
import fs from 'fs-extra';
export async function run(): Promise<void> {
  const argvs = minimist(process.argv.slice(2), {
    alias: {
      output: 'o',
      version: 'v',
      force: 'f',
      path: 'p',
      example: 'e',
    },
    default: {
      path: 'https://antdpro.github.io/antdp/zip/',
      output: '.',
      force: false,
      example: 'basic',
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
  // argvs.appName = argvs._[0];
  // argvs.example = argvs.e = String(argvs.example).toLocaleLowerCase();
  // await create(argvs, helpExample);
  argvs.appName = argvs._[0];
  argvs.example = argvs.e = String(argvs.example).toLocaleLowerCase();
  try {
    await create(argvs, helpExample);
    const pkgPath = path.join(
      process.cwd(),
      argvs.output,
      argvs.appName,
      'package.json',
    );
    if (fs.existsSync(pkgPath)) {
      const pkg = require(pkgPath);
      if (pkg.version) {
        await fs.writeJSON(
          pkgPath,
          {
            ...pkg,
            name: argvs.appName || pkg.name,
            version: '1.0.0',
            scripts: {
              ...pkg.scripts,
              postinstall: 'umi setup',
            },
          },
          { spaces: '  ' },
        );
      }
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  // umiinstall
}

export const helpExample: string = `Example:

    \x1b[35myarn\x1b[0m create antdp \x1b[33mappName\x1b[0m
    \x1b[35mnpx\x1b[0m create-antdp \x1b[33mmy-app\x1b[0m
    \x1b[35mnpm\x1b[0m create antdp \x1b[33mmy-app\x1b[0m
    \x1b[35mnpm\x1b[0m create antdp \x1b[33mmy-app\x1b[0m -f
    \x1b[35mnpm\x1b[0m create antdp \x1b[33mmy-app\x1b[0m -p \x1b[34mhttps://antdpro.github.io/antdp/zip/\x1b[0m
`;

export const helpCli: string = `
  Usage: create-antdp <app-name> [options] [--help|h]

  Options:

    --version, -v   Show version number
    --help, -h      Displays help information.
    --output, -o    Output directory.
    --example, -e   Example from: \x1b[34mhttp://antdpro.github.io/antdp/\x1b[0m, default: "antdp-base"
    --path, -p      Specify the download target git address.
                      default: "\x1b[34mhttp://antdpro.github.io/antdp/\x1b[0m"
  
  ${helpExample}
  
  Copyright 2021

`;
