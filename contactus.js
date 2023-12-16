// contactus.js

function sendMessage() {
    var name = document.getElementById("name").value;
    var youremailaddress = document.getElementById("youremailaddress").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || youremailaddress === "" || email === "" || message === "") {
        alert("Please fill out all required fields.");
    } else if (email === "option1@example.com") {
        alert("Please choose a valid email address from the dropdown.");
    } else if (!isValidEmail(youremailaddress)) {
        alert("Please enter a valid email address for 'Your Email Address.'");
    } else {
        alert("Message successfully sent!");
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
