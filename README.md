# TypeScript Coverage Report

[![npm version](https://badge.fury.io/js/typescript-coverage-report.svg)](https://badge.fury.io/js/typescript-coverage-report)
[![npm downloads](https://img.shields.io/npm/dw/typescript-coverage-report.svg)](https://www.npmjs.com/package/typescript-coverage-report)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Node command line tool for generating TypeScript coverage reports ✨

## Overview

This package fills the gap of a missing type coverage reporting tool which is present in the Flow ecosystem, strongly inspired by the amazing work done by [`flow-coverage-report`](https://github.com/rpl/flow-coverage-report) and using data generated by [`type-coverage`](https://github.com/plantain-00/type-coverage).

[See an example of the coverage report](https://alexcanessa.github.io/typescript-coverage-report/).

### Background

To learn more about the reasoning behind this project and its roadmap, please refer to the following article: [**How I built a TS coverage report tool**](https://medium.com/@alexcanessa/how-did-i-build-a-ts-coverage-report-tool-af34e110d02c?sk=de2eb6c78e581aa8d9979629300873b3)

## Install

`typescript-coverage-report` can be installed locally or globally.

Users are advised to install it as a project _(dev)_ dependency and create a script in `package.json`.

```shell
$ yarn add --dev typescript-coverage-report

# OR

$ npm install --save-dev typescript-coverage-report
```

## Usage

If installed locally, add the following to the _scripts_ section of `package.json`.

```json
"scripts": {
  "ts-coverage": "typescript-coverage-report"
}
```

Then run:

```shell
$ yarn ts-coverage

# OR

$ npm run ts-coverage
```

To set the minimum threshold _(80% by default)_, use the `--threshold` option.

```shell
$ yarn ts-coverage --threshold=99
```

As an alternative, options may be provided through the `type-coverage` [configuration](https://github.com/plantain-00/type-coverage#config-in-packagejson), specified in `package.json`.

```json
"typeCoverage": {
  "atLeast": 90
}
```

![terminal table](images/screenshot-table.png)

![summary page](images/screenshot-summary.png)

![details page](images/screenshot-details.png)

## Options

The CLI accepts a list of arguments:

| Option                     | Description                                        | Default value |
| -------------------------- | -------------------------------------------------- | ------------- |
| `-t, --threshold [number]` | The minimum percentage of coverage required.       | 80            |
| `-o, --outputDir [string]` | The output directory where to generate the report. | coverage-ts   |
| `-s, --strict [boolean]`   | Run the check in strict mode.                      | false         |
| `-d, --debug [boolean]`    | Show debug information.                            | false         |

## Maintainers

[@alexcanessa](https://github.com/alexcanessa)

## Contributing

Feel free to dive in! [Open an issue](https://github.com/alexcanessa/typescript-coverage-report/issues/new/choose) or submit PRs.

On this project we follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/1/3/0/code-of-conduct/).

### Developing

Thanks for contributing!

Remember to run the following commands to link your version of this package and build the TypeScript files.

```bash
# Link the package globally, so you'll be able to test it in other projects.
$ yarn link
# Builds the TypeScript files and watches for changes
$ yarn build --watch
```

### Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/tsaiDavid"><img src="https://avatars3.githubusercontent.com/u/12259854?v=4" width="100px;" alt=""/><br /><sub><b>David Tsai</b></sub></a><br /><a href="https://github.com/alexcanessa/typescript-coverage-report/commits?author=tsaiDavid" title="Documentation">📖</a> <a href="https://github.com/alexcanessa/typescript-coverage-report/issues?q=author%3AtsaiDavid" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://wvvw.me"><img src="https://avatars2.githubusercontent.com/u/6525926?v=4" width="100px;" alt=""/><br /><sub><b>Alexis Tyler</b></sub></a><br /><a href="https://github.com/alexcanessa/typescript-coverage-report/issues?q=author%3AOmgImAlexis" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

### Commit messages

This project follows the [Angular commit messages](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit), but it's very open to emojis 🤯.

## Licence

[MIT](https://spdx.org/licenses/MIT.html) @ Alessandro Canessa

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
