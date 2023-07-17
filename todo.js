document.getElementById("description").disabled = true;
document.getElementById("save").disabled = true;
function inputTitle() {
    document.getElementById("title").value = "";
    document.getElementById("description").disabled = false;
};
function inputDescription() {
    let checkTitle = document.getElementById("title").value.length;
    if (checkTitle == 0) {
        alert("you must give Title");
        document.getElementById("description").disabled = true;
    }
    else if (checkTitle > 20) {
        alert("Title must be less than or equal to 20 characters");
        document.getElementById("description").disabled = true;
    }
    else {
        document.getElementById("description").value = "";
        document.getElementById("save").disabled = false;
    };
};
let savedTitle;
let savedDescription;
let savedData;
function save() {
    savedTitle = document.getElementById("title").value;
    let displayTitle = savedTitle.slice(0, 10);

    savedDescription = document.getElementById("description").value;
    let displayDescription = savedDescription.slice(0, 20);

    savedData = document.createElement("div");
    savedData.classList.add("dataStyle");

    let titleData = document.createElement("h2");
    titleData.innerText = displayTitle;
    titleData.classList.add("titleStyle");

    let descriptionData = document.createElement("button");
    descriptionData.innerText = displayDescription;
    descriptionData.classList.add("descriptionStyle");
    descriptionData.addEventListener('click', openFolder);

    let deleteData = document.createElement("button");
    deleteData.innerText = "del";
    deleteData.classList.add("deleteStyle");
    deleteData.addEventListener('click', deleteFolder);

    let titleHide = document.createElement("h3");
    titleHide.innerText = savedTitle;
    titleHide.classList.add("hideStyle");

    let descriptionHide = document.createElement("p");
    descriptionHide.innerText = savedDescription;
    descriptionHide.classList.add("hideStyle");

    savedData.appendChild(titleData);
    savedData.appendChild(titleHide);
    savedData.appendChild(descriptionData);
    savedData.appendChild(descriptionHide);
    savedData.appendChild(deleteData);

    document.getElementById("displaySaved").appendChild(savedData);

    document.getElementById("title").value = "Title";
    document.getElementById("description").value = "Description";

    document.getElementById("description").disabled = true;
    document.getElementById("save").disabled = true;
};
let displayData;
let initialInputBox;
let initialDisplayBox;
function openFolder() {
    initialInputBox = document.getElementById("inputBox");
    initialDisplayBox = document.getElementById("displayBox");

    document.getElementById("inputBox").remove();
    document.getElementById("displayBox").remove();

    displayData = document.createElement("div");
    displayData.classList.add("displayStyle");

    let displayDataTitle = document.createElement("h5");
    displayDataTitle.classList.add("heading");

    let parent = this.parentElement;

    let titleHere = parent.querySelector("h3").innerText;
    displayDataTitle.innerText = titleHere;

    let displayDataDescription = document.createElement("textarea");
    displayDataDescription.classList.add("content");

    let descriptionHere = parent.querySelector("p").innerText;
    displayDataDescription.innerText = descriptionHere;

    let displayButton = document.createElement("button");
    displayButton.classList.add("close");
    displayButton.addEventListener('click', closing);
    displayButton.innerText = "Close";

    displayData.appendChild(displayDataTitle);
    displayData.appendChild(displayDataDescription);
    displayData.appendChild(displayButton);

    document.getElementById("main").appendChild(displayData);
}
function deleteFolder() {
    this.parentElement.remove();
}
function closing() {
    displayData.remove();
    document.getElementById("main").appendChild(initialInputBox);
    document.getElementById("main").appendChild(initialDisplayBox);
}