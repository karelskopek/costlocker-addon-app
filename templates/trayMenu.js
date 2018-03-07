/**
 * Tray menu template.
 */
module.exports = ({ app }) => [
  {
    accelerator: 'CmdOrCtrl+1',
    label: 'Desktop Addon → Design',
    type: 'radio',
  },
  {
    accelerator: 'CmdOrCtrl+2',
    label: 'Desktop Addon → Coding',
    type: 'radio',
  },
  {
    accelerator: 'CmdOrCtrl+3',
    checked: true,
    label: 'Desktop Addon → Testing',
    type: 'radio',
  },
  {
    type: 'separator',
  },
  {
    accelerator: 'Command+Q',
    click: () => app.quit(),
    label: 'Quit',
  },
];
