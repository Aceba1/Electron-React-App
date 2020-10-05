
const { ipcRenderer, contextBridge } = require('electron');
const ElectronStore = require('electron-store');

let callback = {}

contextBridge.exposeInMainWorld('env', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    }
  },
  fileApi: {
    openDir(defaultPath = "", response = (path) => {}) {
      // Append to callback the response function
      const cbIndex = 0 // Set to callback index or key
      ipcRenderer.send('open-dir', cbIndex, defaultPath)
    }
  }
})

ipcRenderer.on('open-dir-receive', (event, index, path) => {
  // Grab callback with index, call with path
})