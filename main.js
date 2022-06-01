const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

let winStudent;
let winLogin;
let winTeacher;

//Window dashboard student
function createWindowStudent(){
    winStudent = new BrowserWindow({
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

    winStudent.loadFile('./public/students.html');
}

//Window dashboard teachers
function createWindowTeacher(){
    winTeacher = new BrowserWindow({
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

    winTeacher.loadFile('./public/teachers.html');
}

//Window Login
function createWindowLogin(){
    winLogin = new BrowserWindow({
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
            webviewTag: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    winLogin.loadFile('./public/login.html');
}

app.whenReady().then(() => {
    createWindowLogin();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindowLogin();
    });
});

//Listen login
ipcMain.handle('login', (event, rol) => {
    if (rol === "3"){
        createWindowStudent();
        winStudent.show();
        winLogin.close();

    } else if (rol === "2"){
        createWindowTeacher();
        winTeacher.show();
        winLogin.close();

    }
});


//Reload main.js
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