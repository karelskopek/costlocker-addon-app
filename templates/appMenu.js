/**
 * Application menu template.
 */
module.exports = app => [{
  label: 'Application',
  submenu: [
    {
      label: 'About Application',
      selector: 'orderFrontStandardAboutPanel:',
    },
    {
      type: 'separator',
    },
    {
      accelerator: 'Command+Q',
      click: () => app.quit(),
      label: 'Quit',
    },
  ],
}, {
  label: 'Edit',
  submenu: [
    {
      accelerator: 'CmdOrCtrl+Z',
      label: 'Undo',
      selector: 'undo:',
    },
    {
      accelerator: 'Shift+CmdOrCtrl+Z',
      label: 'Redo',
      selector: 'redo:',
    },
    {
      type: 'separator',
    },
    {
      accelerator: 'CmdOrCtrl+X',
      label: 'Cut',
      selector: 'cut:',
    },
    {
      accelerator: 'CmdOrCtrl+C',
      label: 'Copy',
      selector: 'copy:',
    },
    {
      accelerator: 'CmdOrCtrl+V',
      label: 'Paste',
      selector: 'paste:',
    },
    {
      accelerator: 'CmdOrCtrl+A',
      label: 'Select All',
      selector: 'selectAll:',
    },
  ],
}];
