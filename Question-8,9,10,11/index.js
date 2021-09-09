const nameInput = document.querySelector(".app #name-input");
const submitBtn = document.querySelector(".app #submit");
const outputDiv = document.querySelector(".output");

function submitEventHandler() {
    const name = nameInput.value;
    processingOnInputAndDisplay(name);
}

function processingOnInputAndDisplay(fullName) {
    var queryToAPI = "https://api.funtranslations.com/translate/minion.json" + fullName;
    fetch(queryToAPI)
    .then(function(response) {
        if(response.status === 400) {
            outputDiv.innerText = "Bad Request: text is missing.";
        }
        return response.json();
    })
    .then(data => outputDiv.innerText = capitalizeString(data.contents.translated))
    .catch(error => console.log(error));
}

function capitalizeString(strInput) {
    const strArray = strInput.split(" ");

    for(let i = 0; i<strArray.length; i++) {
        strArray[i] = strArray[i].toLowerCase().charAt(0).toUpperCase() + strArray[i].slice(1);  
    }

    return strArray.join(" ");
}

submitBtn.addEventListener("click", submitEventHandler);