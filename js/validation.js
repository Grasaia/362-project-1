document.getElementById('signup-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    } else {
        event.preventDefault();
        document.getElementById('signup-form').reset(); // Reset the form
        displaySuccessMessage();
    }
});

function displaySuccessMessage() {
    var messageElement = document.createElement('p');
    messageElement.textContent = "Hooray your information has been submitted";
    document.getElementById('signup-form').appendChild(messageElement);
}