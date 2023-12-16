// contactus.js

function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    var youremailaddress = document.getElementById("youremailaddress").value;

    if (name === "" || email === "" || message === "" || subject === "" || youremailaddress === "") {
        alert("Please fill out all required fields.");
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
