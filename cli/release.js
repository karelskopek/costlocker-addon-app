// Prepare release data.
const now = new Date();
const RELEASE_DATE = now.toISOString();

// Extract key info.
const {
  AUTHOR = 'karelskopek',
  npm_package_name: NAME,
  npm_package_version: VERSION,
  npm_config_version_tag_prefix: VERSION_PREFIX,
  REPOSITORY = 'costlocker-addon-desktop',
} = process.env;

console.log(`
latest-mac.json
---------------

{
  "version": "${VERSION_PREFIX}${VERSION}",
  "releaseDate": "${RELEASE_DATE}",
  "url": "https://github.com/${AUTHOR}/${REPOSITORY}/releases/download/${VERSION_PREFIX}${VERSION}/${NAME}-${VERSION}-mac.zip"
}
`);
