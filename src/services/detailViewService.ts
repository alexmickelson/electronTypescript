class detailViewService {
    fileCollection: fileInfoService;
    rerender: ()=>void;

    constructor(fileCollection: fileInfoService, rerender: ()=>void){
        this.fileCollection = fileCollection;
        this.rerender=rerender;
    }
    showItem(item: fileInfo) {
        var divTitleBtn= document.createElement("div");
        var itemView = document.getElementById("itemDetailView");

        divTitleBtn.style.padding="1em";


        var divTitle = document.createElement("h3");
        divTitle.innerText = item.displayName;
        divTitle.style.display="inline-block";
        divTitle.setAttribute("contenteditable","true");
        divTitle.classList.add("border");
        divTitle.classList.add("border-dark");
        divTitle.style.padding=".5em";
        divTitle.style.width="70%";
        divTitle.classList.add("rounded");
        divTitle.addEventListener("input",()=>{fileEdited()});
        
        

        var divFileContents = document.createElement("div");
        divFileContents.innerText = item.contents;
        divFileContents.setAttribute("contenteditable","true")
        divFileContents.classList.add("border");
        divFileContents.classList.add("border-dark");
        divFileContents.style.padding="1em";
        divFileContents.classList.add("rounded");
        divFileContents.style.margin=".5em";
        divFileContents.addEventListener("input",()=>{fileEdited()});


        var saveBtn = document.createElement("button");
        saveBtn.classList.add("btn");
        saveBtn.classList.add("btn-primary");
        saveBtn.setAttribute("float","right");
        saveBtn.innerText="Save File";
        saveBtn.style.cssFloat="right";
        saveBtn.style.display="inline";

       saveBtn.addEventListener("click",()=>{
        item.contents=divFileContents.innerText;
        item.displayName=divTitle.innerText;
        this.fileCollection.addOrUpdate(item);
        this.fileCollection.reloadDirectory();
        this.rerender();
        dirtyFile=false;
        alert("File Saved Succefully");

       })

        

       

        itemView.innerHTML = "";
        divTitleBtn.appendChild(divTitle);
        divTitleBtn.appendChild(saveBtn);
        itemView.appendChild(divTitleBtn);
        itemView.appendChild(divFileContents);

       
        

    }

    editItem(item: fileInfo) {
        // var itemView = document.getElementById("itemDetailView");

        // var inputTitle = document.createElement("input");
        // inputTitle.classList.add("form-control");
        // inputTitle.id = "inputTitle";
        // inputTitle.type = "text";
        
        // inputTitle.placeholder="Title";
        // inputTitle.value = item.title;
        // var inputDescription = document.createElement("input");
        // inputDescription.classList.add("form-control");
        // inputDescription.id = "inputDescription";
        // inputDescription.placeholder="Description";
        // inputDescription.type = "text";
        // inputDescription.value = item.message;

        // var saveButton = document.createElement("button");
        // saveButton.classList.add("btn")
        // saveButton.classList.add("btn-primary")
        // saveButton.textContent = "Save!"
        // saveButton.addEventListener("click", () => {
        //     item.title = inputTitle.value;
        //     item.message = inputDescription.value;

        //     fileCollection.add(item);
        //     populateSidebar();
        // })

        // var deleteButton= document.createElement("button");
        // deleteButton.textContent= "Delete";
        // deleteButton.classList.add("btn")
        // deleteButton.classList.add("btn-danger")
        // deleteButton.addEventListener("click",()=>{
        //     fileCollection.deleteItem(inputTitle.value);
        //     populateSidebar();
        // })

        // itemView.innerHTML = "";
        // itemView.appendChild(inputTitle);
        // itemView.appendChild(inputDescription);
        // itemView.appendChild(saveButton);
        // itemView.appendChild(deleteButton);
    }


}