const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

let ignoring = false;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        transparent: true,
        icon: path.join(__dirname, '../images/icon.png'),
    });

    // Load html file and set full screen
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    mainWindow.setFullScreen(true);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

app.whenReady().then(() => {
    globalShortcut.register('CommandOrControl+Alt+Y', () => {
        ignoring = !ignoring;
        app.focus();
        BrowserWindow.getFocusedWindow().setIgnoreMouseEvents(ignoring);
        BrowserWindow.getFocusedWindow().setAlwaysOnTop(ignoring);
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('will-quit', () => {
    console.log('Unregistering hotkeys');
    globalShortcut.unregister('CommandOrControl+Alt+Y');
    globalShortcut.unregisterAll();
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
