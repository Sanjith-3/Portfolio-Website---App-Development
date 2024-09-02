const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const wrapper = document.getElementById('wrapper');

function showSignup() {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
  wrapper.classList.add('rotate-box'); // Apply rotation animation
}

function showLogin() {
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
  wrapper.classList.remove('rotate-box'); // Remove rotation animation
}

document.querySelectorAll('.line').forEach(line => {
  line.classList.add('animate');
});

document.querySelectorAll('.fade-in-slide').forEach(element => {
  element.classList.add('animate');
});

// Initialize with login form visible
showLogin();
