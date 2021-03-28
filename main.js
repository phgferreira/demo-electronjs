const { app, BrowserWindow } = require('electron');

let window;
app.on('ready', () => {

    window = new BrowserWindow({
        width: 1024,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    });

    window.loadFile('public/index.html');

});
