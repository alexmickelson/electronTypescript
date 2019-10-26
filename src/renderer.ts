// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs: typeof import("fs") = require('fs');
const { dialog } = require('electron').remote;



let fileCollection: fileInfoService;
let detailView: detailViewService;
let sidebar: sidebarService;
let dirtyFile: boolean;



function itemHasBeenSelected(e: Event) {
  if(dirtyFile!=true){
  var title = (<HTMLInputElement>e.target).textContent;
  var item = fileCollection.getFileContents(title);
  detailView.showItem(item);
  }
  else{
    alert("You have unsaved changes")
  }

}

function selectFolder(){
  let fileName: string = ""
  dialog.showOpenDialog(null,{
    properties:['openDirectory',]
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

function addListItem(){
  var fileInfoItem = new fileInfo(fileCollection.directoryPath, "fileName");
  detailView.showItem(fileInfoItem);
}

function fileEdited(){
  dirtyFile=true;
  //alert("file is dirty");
}

window.onload = () => {
  fileCollection = new fileInfoService(fs);
  sidebar = new sidebarService(fileCollection);
  detailView = new detailViewService(fileCollection,sidebar.populateSidebar);
  dirtyFile=false;
};


