// Packages
const {
  app,
  BrowserWindow,
  Menu,
  Tray,
} = require('electron');
const { autoUpdater } = require('electron-updater');
const { join } = require('path');
const logger = require('electron-log');

// Get the app URL.
const { APP_URL } = require('../app.config');

// Templates.
const appMenuTemplate = require('../templates/appMenu');
const trayMenuTemplate = require('../templates/trayMenu');

// Log autoUpdater status.
autoUpdater.logger = logger;
autoUpdater.logger.transports.file.level = 'info';

// Simpler checking for updates using electron updater.
autoUpdater.checkForUpdatesAndNotify();

// Global items.
let appMenu; // eslint-disable-line no-unused-vars
let mainWindow;
let tray;
let trayMenu;

/**
 * Toggle window.
 */
function toggleWindow() {
  if (mainWindow.isVisible()) {
    mainWindow.hide();
  } else {
    mainWindow.show();
  }
}

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  // Main application window.
  mainWindow = new BrowserWindow({
    backgroundColor: '#ffffff',
    height: 600,
    maximizable: false,
    resizable: false,
    title: 'Costlocker',
    titleBarStyle: 'hidden',
    width: 720,
  });

  // Load URL.
  mainWindow.loadURL(APP_URL);

  // Create tray icon.
  tray = new Tray(join(__dirname, 'assets/icons/tray.png'));

  // Tray menu.
  trayMenu = Menu.buildFromTemplate(trayMenuTemplate(app));

  // Application menu.
  appMenu = Menu.setApplicationMenu(Menu.buildFromTemplate(appMenuTemplate(app)));

  // Tooltip.
  // @TODO: Add current tracking record info.
  tray.setToolTip('Costlocker');

  // Context menu.
  tray.setContextMenu(trayMenu);

  // Tray click.
  tray.on('click', () => {
    toggleWindow();
  });

  // Tray double click.
  tray.on('double-click', toggleWindow);

  // Tray right click.
  tray.on('right-click', toggleWindow);
});

// Quit the app once all windows are closed.
app.on('window-all-closed', app.quit);
