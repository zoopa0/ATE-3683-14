// script.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signInForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = new FormData(event.target);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        // Send the data to the backend API
        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            const messageElement = document.getElementById('message');
            if (messageElement) {
              if (data.success) {
                messageElement.textContent = alert('Sign In successful!');
              } else {
                messageElement.textContent = alert('Sign In failed: ' + data.message);
              }
            }
        })
        .catch(error => {
            const messageElement = document.getElementById('message');
            if (messageElement) {
                messageElement.textContent = 'An error occurred: ' + error.message;
            } else {
                console.error('Message element not found');
            }
        });
    });
});
