const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            devTools: true,
        }
    })
    win.maximize()
    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)

//Quit when all windows are closed.

app.on('window-all-closed', ()=>{
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', ()=>{
    // On OS X it's commin to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open
    if(BrowserWindow.getAllWindows.length === 0){
        createWindow()
    }
})