// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('DesignStudio loaded successfully 🎨');

    // Optional smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_5vao28b', 'template_ie6xink', this)
    .then(() => {
      alert('Message sent successfully! 🎉');
      this.reset();
    })
    .catch((error) => {
      alert('Error sending message. Please try again.');
      console.error(error);
    });
});