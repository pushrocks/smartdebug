# smartdebug

debug the smart way

## Availabililty

[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/@pushrocks/smartdebug)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/smartdebug)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartdebug)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartdebug/)

## Status for master

[![build status](https://GitLab.com/pushrocks/smartdebug/badges/master/build.svg)](https://GitLab.com/pushrocks/smartdebug/commits/master)
[![coverage report](https://GitLab.com/pushrocks/smartdebug/badges/master/coverage.svg)](https://GitLab.com/pushrocks/smartdebug/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartdebug.svg)](https://www.npmjs.com/package/@pushrocks/smartdebug)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartdebug/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartdebug/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartdebug/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartdebug)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartdebug/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartdebug)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

Use TypeScript for best in class instellisense.

```typescript
import * as smartdebug from '@pushrocks/smartdebug';

smartdebug.log('a cool message'); // won't log
smartdebug.enableDebugging();
smartdebug.log('another cool message'); // this message will log

if (smartdebug.debugEnabled) {
  console.log('Hi there!'); // will also log since debugging is enabled
}
```

For further information read the linked docs at the top of this README.

> licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
> | By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
