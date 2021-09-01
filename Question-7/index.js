const loadedText = document.querySelector(".app #text");
const loadedButton = document.querySelector("#loaded");

function loadedButtonClickHandler() {
    hideLoadedButton();
}

function hideLoadedButton() {
    loadedText.style.display = "none";
}

loadedButton.addEventListener("click", loadedButtonClickHandler);