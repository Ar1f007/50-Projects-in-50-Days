const container = document.querySelector('#js-container');
const colors = [
  '#313552',
  '#B33030',
  '#1572A1',
  '#A1B57D',
  '#54BAB9',
  '#FF9F45',
  '#2EB086',
  '#7897AB',
  '#7A0BC0',
];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
