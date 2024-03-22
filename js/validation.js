document.getElementById('signup-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});