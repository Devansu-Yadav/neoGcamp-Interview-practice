const textInput = document.querySelector("#text-input");
const increaseBtn = document.querySelector("#increase-btn");
const decreaseBtn = document.querySelector("#decrease-btn");
const errorMsg = document.querySelector("#error-msg");

function increaseFontHandler() {
    changeFontSize(2);
}

function decreaseFontHandler() {
    changeFontSize(-2);
}

function changeFontSize(sizeAmount) {
    if(textInput.value == "") {
        errorMsg.style.display = "block";
        errorMsg.innerText = "Enter a sentence!!";
    } else {
        updateFontSize(sizeAmount);
    }
}

function updateFontSize(sizeAmount) {
    console.log(window.getComputedStyle(textInput, null).getPropertyValue('font-size'));
    var currentfontSize = parseFloat(window.getComputedStyle(textInput, null).getPropertyValue('font-size'));
    textInput.style.fontSize = currentfontSize + sizeAmount + "px";
}

increaseBtn.addEventListener("click", increaseFontHandler);
decreaseBtn.addEventListener("click", decreaseFontHandler);