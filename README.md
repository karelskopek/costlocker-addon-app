# Costlocker Addon Desktop app

This repository contains the Costlocker desktop time tracking application wrapped using Electron.

---

## Icons

> I originally used `electron-icon-maker` for creating icons, but there was a glitch in the small icon version, so I opted to use and app called [_Icon Slate_](https://itunes.apple.com/cz/app/icon-slate/id439697913) that create both formats we need (`.icns` and `.ico`).

1. Buy [Icon Slate](https://itunes.apple.com/cz/app/icon-slate/id439697913).
1. Open `assets/icons/main.iconsproj`.
1. Build the icons (both `icns` and `ico`).
1. Rename and place the icons to their respective directories:
    - `icon.icns` file to `build/icons/mac/icon.icns`
    - `icon.ico` file to `build/icons/win/icon.ico`
1. Rebuild the app using `yarn dist` or `yarn release`.

---

## Publishing

1. Pull the latest `master` branch and check it out.
1. Run `yarn dist` to check the build of the latest version of the app.
1. Use `npm version [type]`, where _type_ is `major`, `minor` or `patch` based on the type of changes. See more in the [npm documentation](https://docs.npmjs.com/cli/version).
1. Push the changes.
1. Run `GH_TOKEN=… yarn release` to get metadata about the release, where `GH_TOKEN` is generated Github token.
1. Publish newly drafted release (_Github repository → Releases → Tags → Add release notes_).
