const {app, BrowserWindow } = require('electron')
const {ipcMain} = require('electron');

var win;

function createWindow() {
	win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			webviewTag: true,
      			zoomFactor: 1.0
		}
	});

	win.loadFile('index.html')
	win.on('closed', () => {
		win = null
	})
}

app.on('ready', createWindow)

ipcMain.on('result', (event, arg) => {
	let result = JSON.parse(arg);
	console.log('Token: '+result.token);
	console.log('State: '+result.state);
	if (win) {
		win.hide();
		win = null;
		if (process.platform != 'darwin') {
			app.quit();
		}
	}
});
