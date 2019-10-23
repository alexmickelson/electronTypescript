class detailViewService {
    fileCollection: fileInfoService;

    constructor(fileCollection: fileInfoService){
        this.fileCollection = fileCollection;
    }
    showItem(item: fileInfo) {
        // var itemView = document.getElementById("itemDetailView");

        // var divTitle = document.createElement("div");

        // divTitle.classList.add("form-control");
        // divTitle.innerText = item.title;
        // var divDescription = document.createElement("div");
        // divDescription.classList.add("form-control");
        // divDescription.innerText = item.message;

        // var editButton =document.createElement("button");
        // editButton.innerText="Edit"
        // editButton.classList.add("btn");
        // editButton.classList.add("btn-primary");
        // editButton.addEventListener("click",()=>{
        //     this.editItem(item);
        // })

        // itemView.innerHTML = "";
        // itemView.appendChild(divTitle);
        // itemView.appendChild(divDescription);
        // itemView.appendChild(editButton);
        

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