// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


window.onload = () => {
    const items: Array<String> = [
      "one",
      "two",
      "three"
    ];
    const el = document.getElementById('mySidebar');
    items.forEach(item => {
        var div = document.createElement("div");
        div.innerText = item.toString();
        el.appendChild(div);
    });
};