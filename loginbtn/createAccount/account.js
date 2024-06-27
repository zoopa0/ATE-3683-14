document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signupForm');

  if (!signupForm) {
    console.error('Signup form element not found');
    return;
  }

  signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('fullName').value;
    console.log(name)
    const email = document.getElementById('email').value;
    console.log(email)
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    const payload = {
      name: name,
      email: email,
      password: password,
      // passwordConfirm: passwordConfirm
    };

    fetch('http://localhost:6000/auth/signup', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Registration successful!');
        // Redirect or update the UI as needed
      } else {
          alert('Registration failed: ' + data.message);
        }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  })
});