#!/usr/bin/env node

import { program } from "commander";
import generateCoverageReport from "../lib";
import getOptions from "../lib/getOptions";
import path from "path";

const {
  version,
  description
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("../../package.json");

const {
  typeCoverage = {}
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require(path.join(process.cwd(), "/package.json"));

const argvWithVersion = (argvs: string[]): string[] => {
  const vPos = argvs.indexOf("-v");

  if (vPos > -1) {
    argvs[vPos] = "-V";
  }

  return argvs;
};

const {
  atLeast = 80,
  strict = false,
  debug = false,
  cache = false,
  ignoreFiles = false,
  ignoreUnread = false,
  outputDir = "coverage-ts"
} = typeCoverage;

program
  .version(version)
  .description(description)
  .option(
    "-o, --outputDir [string]",
    "the output directory where to generate the report.",
    outputDir
  )
  .option(
    "-t, --threshold [number]",
    "the minimum percentage of coverage required.",
    parseFloat,
    atLeast
  )
  .option("-s, --strict [boolean]", "run the check in strict mode.", strict)
  .option("-d, --debug [boolean]", "show debug information.", debug)
  .option(
    "-c, --cache [boolean]",
    "save and reuse type check result from cache.",
    cache
  )
  .option(
    "-i, --ignore-files [string[]]",
    'ignore specified files, eg: --ignore-files "demo1/*.ts" --ignore-files "demo2/foo.ts"',
    ignoreFiles
  )
  .option(
    "-u, --ignore-unread [boolean]",
    "allow writes to variables with implicit any types",
    ignoreUnread
  )
  .parse(argvWithVersion(process.argv));

const options = getOptions(program);

generateCoverageReport(options)
  .then(({ percentage }) => {
    if (percentage < options.threshold) {
      console.error(
        `\nThe TypeScript coverage ${percentage.toFixed(
          2
        )}% is lower than the threshold ${options.threshold}%`
      );

      process.exit(2);
    }

    process.exit(0);
  })
  .catch((error) => {
    console.error(error);

    process.exit(255);
  });
