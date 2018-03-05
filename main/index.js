// Packages
const {
  app,
  BrowserWindow,
  Menu,
  Tray,
} = require('electron');
const { join } = require('path');

// Library.
const initAutoUpdater = require('../lib/initAutoUpdater');

// Templates.
const appMenuTemplate = require('../templates/appMenu');
const trayMenuTemplate = require('../templates/trayMenu');

// Get the app URL.
const {
  APP_URL = 'http://localhost:3000',
  AUTO_UPDATER_INTERVAL = 60 * 1000,
  AUTO_UPDATER_SERVER = 'http://localhost:3002',
} = process.env;

// Initialize the auto updater.
initAutoUpdater(AUTO_UPDATER_SERVER, AUTO_UPDATER_INTERVAL);

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
