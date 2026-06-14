const greetBtn = document.getElementById('greetBtn');
const message = document.getElementById('message');

if (greetBtn && message) {
  greetBtn.addEventListener('click', () => {
    message.textContent = 'Hello from your local web app!';
  });
}
