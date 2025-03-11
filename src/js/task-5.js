function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');


changeColorButton.addEventListener('click', function() {
  // Генеруємо випадковий hex-колір
  const randomColor = getRandomHexColor();


  document.body.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;
});