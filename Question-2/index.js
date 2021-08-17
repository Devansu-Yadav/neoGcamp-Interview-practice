const input_no_1 = document.querySelector(".input #input-no-1");
const input_no_2 = document.querySelector(".input #input-no-2");
const outputDiv = document.querySelector(".app .output");
const addBtn = document.querySelector("#add-btn");
const subtractBtn = document.querySelector("#subtract-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const divideBtn = document.querySelector("#divide-btn");

function addOperationHandler() {
    inputEventHandler("+");
}

function subtractOperationHandler() {
    inputEventHandler("-");
}

function multiplyOperationHandler() {
    inputEventHandler("x");
}

function divisionOperationHandler() {
    inputEventHandler("/");
}

function inputEventHandler(sign) {
    const no_1 = input_no_1.value;
    const no_2 = input_no_2.value;

    if(no_1 == "" || no_2 == "") {
        outputDiv.innerText = "Enter value of both the numbers!!";
    } else {
        displayCalculatedValue(Number(no_1), Number(no_2), sign);
    }
}

function displayCalculatedValue(no1, no2, sign) {
    var calculatedValue = 0;
    if(sign === "+") {
        calculatedValue = no1 + no2;
    } else if(sign === "-") {
        calculatedValue = no1 - no2;
    } else if(sign === "x") {
        calculatedValue = no1*no2;
    } else {
        calculatedValue = (no1 / no2).toFixed(3);
    }

    outputDiv.innerText = "Output:- " + calculatedValue;
}

addBtn.addEventListener("click", addOperationHandler);

subtractBtn.addEventListener("click", subtractOperationHandler);

multiplyBtn.addEventListener("click", multiplyOperationHandler);

divideBtn.addEventListener("click", divisionOperationHandler);
