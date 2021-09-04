const nameInput = document.querySelector(".app #name-input");
const submitBtn = document.querySelector(".app #submit");
const outputDiv = document.querySelector(".output");

function submitEventHandler() {
    const name = nameInput.value;
    processingOnInputAndDisplay(name);
}

function processingOnInputAndDisplay(fullName) {
    var queryToAPI = "https://api.funtranslations.com/translate/minion.json?text=" + fullName;
    fetch(queryToAPI)
    .then(response => response.json())
    .then(data => outputDiv.innerText = capitalizeString(data.contents.translated))
    .catch(err => console.log(err));
}

function capitalizeString(strInput) {
    const strArray = strInput.split(" ");

    for(let i = 0; i<strArray.length; i++) {
        strArray[i] = strArray[i].toLowerCase().charAt(0).toUpperCase() + strArray[i].slice(1);  
    }

    return strArray.join(" ");
}

submitBtn.addEventListener("click", submitEventHandler);