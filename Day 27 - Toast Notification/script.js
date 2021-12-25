const button = document.querySelector('.btn');
const toasts = document.querySelector('.toasts');

const messages = [
  'Message one',
  'Message two',
  'Message three',
  'Message four',
  'Message five',
];

const types = ['success', 'error', 'info'];

button.addEventListener('click', () => {
  createNotification();
});

function createNotification(type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : randomTypes());

  notif.innerText = getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 2500);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function randomTypes() {
  return types[Math.floor(Math.random() * types.length)];
}
