const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let win;

function creatWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'html/index.html'),
      protocol: 'file',
      slashes: true
    })
  );

  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', creatWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('active', () => {
  if (win === null) {
    creatWindow();
  }
});
