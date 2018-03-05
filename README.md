# Costlocker Addon Desktop app

This repository contains the Costlocker desktop time tracking application wrapped using Electron.

---

## Publishing

1. Pull the latest `master` branch and check it out.
1. Run `yarn dist` to check the build of the latest version of the app.
1. Use `npm version [type]`, where _type_ is `major`, `minor` or `patch` based on the type of changes. See more in the [npm documentation](https://docs.npmjs.com/cli/version).
1. Push the changes.
1. Run `GH_TOKEN=… yarn release` to get metadata about the release, where `GH_TOKEN` is generated Github token.
1. Publish newly drafted release (_Github repository → Releases → Tags → Add release notes_).
