
const game = document.querySelector('.game');
const topRod = document.getElementById('topRod');
const bottomRod = document.getElementById('bottomRod');
const ball = document.getElementById('ball');
const ballSpeed = 2;
let ballX = game.offsetWidth / 2;
let ballY = game.offsetHeight / 2;
let ballDirectionX = 1;
let ballDirectionY = 1;

const moveRods = (event) => {
  if (event.key === 'a') {
    topRod.style.left = `${parseInt(topRod.style.left || 0) - 10}px`;
    bottomRod.style.left = `${parseInt(bottomRod.style.left || 0) - 10}px`;
  } else if (event.key === 'd') {
    topRod.style.left = `${parseInt(topRod.style.left || 0) + 10}px`;
    bottomRod.style.left = `${parseInt(bottomRod.style.left || 0) + 10}px`;
  }
};

const startGame = () => {
  window.addEventListener('keydown', moveRods);
  requestAnimationFrame(updateBall);
};

const updateBall = () => {
  ballX += ballSpeed * ballDirectionX;
  ballY += ballSpeed * ballDirectionY;

  if (ballX <= 0 || ballX >= game.offsetWidth) {
    ballDirectionX *= -1;
  }

  if (ballY <= 0) {
    ballDirectionY = 1;
    alert('Bottom player wins!');
    resetRound();
  } else if (ballY >= game.offsetHeight) {
    ballDirectionY = -1;
    alert('Top player wins!');
    resetRound();
  }

  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  requestAnimationFrame(updateBall);
};

const resetRound = () => {
  ballX = game.offsetWidth / 2;
  ballY = game.offsetHeight / 2;
  ballDirectionX = Math.random() > 0.5 ? 1 : -1;
  ballDirectionY = Math.random() > 0.5 ? 1 : -1;
  topRod.style.left = `${game.offsetWidth / 2 - topRod.offsetWidth / 2}px`;
  bottomRod.style.left = `${game.offsetWidth / 2 - bottomRod.offsetWidth / 2}px`;
};

startGame();
