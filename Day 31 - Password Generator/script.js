function getRandomLowercaseLtr() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercaseLtr() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
