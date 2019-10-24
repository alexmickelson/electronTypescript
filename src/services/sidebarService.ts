class sidebarService {
    fileCollection: fileInfoService;

    constructor(fileCollection: fileInfoService){
        this.fileCollection = fileCollection;
        this.populateSidebar();
    }
        
    populateSidebar() {
        const el = document.getElementById("mySidebar");
        el.innerHTML="";
        
        this.fileCollection.getList().forEach(file => {
            var div = document.createElement("li");
            div.innerText = file.displayName;
            div.classList.add("list-group-item")
            div.addEventListener("click", (e: Event) => {});//itemhasbeenselected
            el.appendChild(div);
        });
    }

}