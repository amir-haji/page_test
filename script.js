// Function to display an alert
function showAlert() {
    alert("Button clicked!");
}

// Function to load the header component
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}

// Function to load the footer component
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

// Function to validate the contact form
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
    } else {
        alert("Form submitted successfully!");
        document.getElementById('contactForm').reset();
    }
}

// Add event listeners after DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
    loadFooter();
    const button = document.getElementById("alertButton");
    if (button) {
        button.addEventListener("click", showAlert);
    }
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});
