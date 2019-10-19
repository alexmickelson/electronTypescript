class detailViewService {
    showItem(item: listItem) {
        var itemView = document.getElementById("itemDetailView");

        var divTitle = document.createElement("div");
        divTitle.innerText = item.title;
        var divDescription = document.createElement("div");
        divDescription.innerText = item.message;

        itemView.innerHTML = "";
        itemView.appendChild(divTitle);
        itemView.appendChild(divDescription);

    }

    editItem(item: listItem) {
        var itemView = document.getElementById("itemDetailView");

        var inputTitle = document.createElement("input");
        inputTitle.id = "inputTitle";
        inputTitle.type = "text";
        inputTitle.value = item.title;
        var inputDescription = document.createElement("input");
        inputDescription.id = "inputDescription";
        inputDescription.type = "text";
        inputDescription.value = item.message;

        var saveButton = document.createElement("button");
        saveButton.textContent = "Save!"
        saveButton.addEventListener("click", () => {
            item.title = inputTitle.value;
            item.message = inputDescription.value;

            items.add(item);
            populateSidebar()
        })

        itemView.innerHTML = "";
        itemView.appendChild(inputTitle);
        itemView.appendChild(inputDescription);
        itemView.appendChild(saveButton);
    }


}