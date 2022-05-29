const { app, BrowserWindow} = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

function createWindow(){
    const win = new BrowserWindow({
        width: 1080,
        height: 760,
        minWidth: 450,
        minHeight: 600,
        autoHideMenuBar: true,
        webPreferences:{
            nodeIntegration: false,
            nodeIntegrationWorker: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            webviewTag: true
        }
    });

    win.loadFile('./public/index.html');

    //open the DevTools
    //win.webContents.openDevTools();
}

app.whenReady().then(()=>{
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

if (isDev){
    require('electron-reload')(__dirname, () => {
        electron: path.join(__dirname, 'node_modules', 'bin', 'electron');
    });
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
});