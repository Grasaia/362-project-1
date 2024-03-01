document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const experience = document.getElementById('experience').value;

        console.log('name:', name);
        console.log('Email:', email);
        console.log('Experience Level:', experience);

        alert('Thank you for signing up for the project!');
        form.reset();
    });
});