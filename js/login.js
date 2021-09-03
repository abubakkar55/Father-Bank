// DOM Manuplation

const submitBtn = document.getElementById("submit-btn");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const emailWarning = document.getElementById("email-warning");

submitBtn.addEventListener("click", function () {
    if (email.value == "abubakkar@gmail.com" && phone.value == "01868645636" && password.value == "secretab") {
        window.location.href = "deposite.html";
    } else {
        emailWarning.style.visibility = "visible";
        // clear the input fields
        email.value = "";
        phone.value = "";
        password.value = "";
    }
});