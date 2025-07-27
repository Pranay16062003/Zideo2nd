// Optional basic JS functionality

document.addEventListener('DOMContentLoaded', () => {
  const readMoreLinks = document.querySelectorAll('.read-more');

  readMoreLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('This would take you to the full blog post. Backend not implemented yet.');
    });
  });
});

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const message = document.getElementById('newsletter-message');
  message.textContent = `Thank you for subscribing, ${email}!`;
  this.reset();
});
