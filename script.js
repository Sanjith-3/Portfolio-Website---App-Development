// JavaScript code to enhance interactivity

// Example: Alert when a project link is clicked
document.querySelectorAll('.projects a').forEach(function(projectLink) {
    projectLink.addEventListener('click', function() {
        alert('You are now viewing details for ' + this.textContent);
    });
});

// Example: Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
