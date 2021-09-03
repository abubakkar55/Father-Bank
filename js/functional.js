// DOM Manuaplation
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const backBtn = document.getElementById("back-btn");
const depositField = document.getElementById("deposit-field");
const withdrawField = document.getElementById("withdraw-field");
const depositAmount = document.getElementById("deposit-amount");
const withdrawAmount = document.getElementById("withdraw-amount");
const totalAmount = document.getElementById("total-amount");
const depositWarning = document.getElementById("deposit-warning");
const withdrawWarning = document.getElementById("withdraw-warning");
const balanceWarning = document.getElementById("balance-warning");

// back-btn
backBtn.addEventListener("click", function () {
    window.location.href = "index.html";
});
// Main Functional part
function fatherBank(inputField, displayField, totalField, isaAdd) {
    // deposit amount
    const inputFieldAmount = parseFloat(inputField.value);
    const displayFieldAmount = parseFloat(displayField.innerText);
    displayField.innerText = displayFieldAmount + inputFieldAmount;

    //update the total amount by increating or deccresti depsosit amount
    const totalFieldAmount = parseFloat(totalField.innerText);
    if (isaAdd == true) {
        totalField.innerText = inputFieldAmount + totalFieldAmount;
    } else {
        totalField.innerText = totalFieldAmount - inputFieldAmount;
    }
    // clear the input fields
    depositField.value = "";
    withdrawField.value = "";
};

// Deposti functionally
depositBtn.addEventListener("click", function () {
    if (depositField.value < 0 || depositField.value == "" || isNaN(depositField.value)) {
        depositWarning.style.visibility = "visible";
        // clear the input fields
        depositField.value = "";
    } else {
        depositWarning.style.visibility = "hidden";
        fatherBank(depositField, depositAmount, totalAmount, true);
    }
});

// Withdraw functionally
withdrawBtn.addEventListener("click", function () {
    const withdrawUserAmount = parseFloat(withdrawField.value);
    const totalInner = parseFloat(totalAmount.innerText);
    if (withdrawField.value < 0 || withdrawField.value == "" || isNaN(withdrawField.value)) {
        withdrawWarning.style.visibility = "visible";
        balanceWarning.style.display = "none";
        // clear the input fields
        withdrawField.value = "";
    } else if (withdrawUserAmount >= totalInner) {
        balanceWarning.style.display = "block";
         // clear the input fields
         withdrawField.value = "";
    } else {
        withdrawWarning.style.visibility = "hidden";
        balanceWarning.style.display = "none";
        fatherBank(withdrawField, withdrawAmount, totalAmount, false);
    }
});