// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs = require('fs');


let fileCollection: fileInfoService;
let detailView: detailViewService;
let sidebar: sidebarService;

function itemHasBeenSelected(e: Event) {
  var title = (<HTMLInputElement>e.target).textContent;
  var item = fileCollection.getItem(title);
  detailView.showItem(item);

}

function selectFolder(){

}

function addfileInfo(e: Event) {
  var item = new fileInfo("", "");

  detailView.editItem(item);

  //when user presses submit save values
}

window.onload = () => {
  fileCollection = new fileInfoService();
  detailView = new detailViewService(fileCollection);
  sidebar = new sidebarService(fileCollection);
};


