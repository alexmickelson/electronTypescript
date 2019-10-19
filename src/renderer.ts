// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let items: listItemService;
let detailView: detailViewService;

function itemHasBeenSelected(e: Event) {
  var title = (<HTMLInputElement>e.target).textContent;
  var item = items.getItem(title);
  detailView.showItem(item);

}



function populateSidebar() {
  var list = items.getList();
  const el = document.getElementById("mySidebar");
  el.innerHTML="";
  list.forEach(item => {
    var div = document.createElement("li");
    div.innerText = item.title;
    div.classList.add("list-group-item")
    div.addEventListener("click", (e: Event) => itemHasBeenSelected(e));
    el.appendChild(div);
  });
}
function addListItem(e: Event) {
  var item = new listItem(0, "", "");

  detailView.editItem(item);

  //when user presses submit save values
}

window.onload = () => {
  items = new listItemService();
  detailView = new detailViewService();
  populateSidebar();
};


