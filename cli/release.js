// Prepare release data.
const now = new Date();
const RELEASE_DATE = now.toISOString();

// Extract key info.
const {
  AUTHOR = 'karelskopek',
  NAME = 'costlocker',
  npm_package_name: REPOSITORY,
  npm_package_version: VERSION,
} = process.env;

const FILE_NAME = `${NAME}-${VERSION}-mac.zip`;

console.log(`
latest-mac.json
---------------

{
  "version": "${VERSION}",
  "releaseDate": "${RELEASE_DATE}",
  "url": "https://github.com/${AUTHOR}/${REPOSITORY}/releases/download/${VERSION}/${FILE_NAME}"
}

FILENAME
--------
${FILE_NAME}
`);
