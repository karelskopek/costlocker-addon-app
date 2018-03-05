// Vendor.
const {
  app,
  autoUpdater,
  dialog,
} = require('electron');
const isDev = require('electron-is-dev');

// Do not run the update process in development.
module.exports = (server, interval) => {
  // We don't want to update the app when developing it. Duh!
  if (isDev) {
    return;
  }

  const feed = `${server}/update/${process.platform}/${app.getVersion()}`;
  autoUpdater.setFeedURL(feed);
  autoUpdater.checkForUpdates();

  // Start auto checks.
  setInterval(() => autoUpdater.checkForUpdates(), interval);

  // Once the update is ready, ask the user what to do.
  autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
    const dialogOpts = {
      buttons: ['Aktualizovat', 'Později'],
      detail: 'Mám pro vás připravenou novou verzi aplikace. Restartujte aplikaci a bude se vám trackovat zase o něco lépe!',
      message: process.platform === 'win32' ? releaseNotes : releaseName,
      title: 'Nová verze',
      type: 'info',
    };

    // Update if the user selected so.
    dialog.showMessageBox(dialogOpts, response => (
      response === 0 && autoUpdater.quitAndInstall()
    ));
  });

  // Update errors.
  autoUpdater.on('error', (message) => {
    console.error('Nastala chyba při aktualizaci aplikace.');
    console.error(message);
  });
};
