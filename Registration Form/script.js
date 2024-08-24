document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errors = document.querySelectorAll('.error-message');
    let hasErrors = false;
    
    // Hide all error messages initially
    errors.forEach(error => error.style.display = 'none');

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        hasErrors = true;
    }

    if (hasErrors) {
        // Prevent form submission if there are errors
        event.preventDefault();
    } else {
        // Prevent default form submission behavior
        event.preventDefault();

        // Show success animation
        document.querySelector('.container').classList.add('fade-out');
        setTimeout(() => {
            document.querySelector('.container').style.display = 'none';
            document.getElementById('success-animation').classList.remove('hidden');
        }, 1000);
    }
});
