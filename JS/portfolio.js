// Display a welcome message when the portfolio page loads.

window.addEventListener("load", function() {
    alert("Welcome to Anastasia's Portfolio!");
});


// Check the contact form before it is submitted.

document.querySelector("form").addEventListener("submit", function(event) {

    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var message = document.getElementById("Message").value;

    if (name === "" || email === "" || message === "") {
        event.preventDefault();
        alert("Please complete all fields before submitting.");
    } else {
        event.preventDefault();
        alert("Thank you for contacting me!");
    }
});