// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs: typeof import("fs") = require('fs');
const { dialog } = require('electron').remote;



let fileCollection: fileInfoService;
let detailView: detailViewService;
let sidebar: sidebarService;



function itemHasBeenSelected(e: Event) {
  var title = (<HTMLInputElement>e.target).textContent;
  var item = fileCollection.getFileContents(title);
  detailView.showItem(item);

}

function selectFolder(){
  let fileName: string = ""
  dialog.showOpenDialog(null,{
    properties:['openDirectory']
  }).then(result => {
    fileCollection.loadDirectory(result.filePaths[0]+"/");
    sidebar.populateSidebar();
  });
}

function addfileInfo(e: Event) {
  var item = new fileInfo("", "");

  detailView.editItem(item);

  //when user presses submit save values
}

window.onload = () => {
  fileCollection = new fileInfoService(fs);
  detailView = new detailViewService(fileCollection);
  sidebar = new sidebarService(fileCollection);
};


