const container = document.querySelector('.container');
const URL = 'https://source.unsplash.com/random';
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${URL}/${getRandomSize()}`;
  container.appendChild(img);
}

console.log(getRandomSize());
function getRandomSize() {
  return `${getRandomNum()}x${getRandomNum()}`;
}
function getRandomNum() {
  return Math.floor(300 + Math.random() * 10);
}
