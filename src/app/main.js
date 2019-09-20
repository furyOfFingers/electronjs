const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let win;

function creatWindow() {
  win = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
    },
    //отключает frame и возможность перетаскивать окно
    // frame: false
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
  // отключает menuBar под title`ом фрейма.
  win.setMenuBarVisibility(false)
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
