const audio = new Audio("../music/5bcc9a162316710.mp3")
const buttons = document.querySelectorAll(".box");

buttons.forEach(button => {
  button.addEventListener("click", () => {
  audio.play();
  });
});

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
document.querySelector('div').addEventListener('click', () => {
  document.querySelector('audio').play()
})