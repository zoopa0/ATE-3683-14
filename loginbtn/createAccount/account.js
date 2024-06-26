// script.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        // Send the data to the backend API
        fetch('http://localhost:3000/auth/signup', {
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
                messageElement.textContent = alert('Registration successful!');
              } else {
                messageElement.textContent = alert('Registration failed: ' + data.message);
              }
            }
        })
        .catch(error => {
            
        });
    });
});
