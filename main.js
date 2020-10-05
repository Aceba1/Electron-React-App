
const { BrowserWindow, app, ipcMain, Notification, dialog } = require('electron');
const { open } = require('fs');
const path = require('path');
const Store = require('electron-store');

const store = new Store({
  defaults: {
    gamePath: ""
  }
})

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');
}

if (isDev) {
  require('electron-reload')(__dirname)
}

ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notifiation', body: message}).show();
})
ipcMain.on('open-dir', async (event, response, defaultPath) => {
  const r = await dialog.showOpenDialog({ // Run the folder dialog
    properties: ['openDirectory'],
    defaultPath: defaultPath,
  });

  if (!r.canceled) {
    event.sender.send(response, r.filePaths[0]); // Return to sender
  }
})

app.whenReady().then(createWindow)
