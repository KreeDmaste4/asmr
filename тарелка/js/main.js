let box = document.querySelector('.box');

box.addEventListener("click", function() {
  box.classList.add('box_animate_2');
});

// Отслеживаем окончание анимации
box.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler () {
  // Удаляем класс с анимацией
  box.classList.remove('box_animate_2');
  
}

const audio = new Audio("file:///C:/Users/Administrator/Downloads/plate-glass-hammer-break_zyvnr-eo.mp3")
const buttons = document.querySelectorAll(".box");

buttons.forEach(button => {
  button.addEventListener("click", () => {
  audio.play();
  });
});

document.querySelector('div').addEventListener('click', () => {
  document.querySelector('audio').play()
})