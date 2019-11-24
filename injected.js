const { ipcRenderer } = require('electron');

ipcRenderer.on('report', () => {
	ipcRenderer.sendToHost(getContent());
});

const getContent = () => {
	return document.body.innerText;
};
