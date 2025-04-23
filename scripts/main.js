document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS animation
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        once: true,
      });
    }
  
    // Show thank you message after form submission
    const form = document.querySelector('.contact-form');
    const message = document.querySelector('.thank-you-message');
  
    if (form && message) {
      form.addEventListener('submit', function () {
        message.style.display = 'block';
      });
    }
  });
  