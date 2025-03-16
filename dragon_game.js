const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dragon = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 100,
  height: 100,
  speed: 5,
  image: new Image()
};

dragon.image.src = 'dragon.png'; // Add the path to your dragon image

const mountains = {
  image: new Image()
};

mountains.image.src = 'mountains.png'; // Add the path to your mountains image

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(mountains.image, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(dragon.image, dragon.x, dragon.y, dragon.width, dragon.height);
}

function update() {
  draw();
  requestAnimationFrame(update);
}

canvas.addEventListener('mousemove', (event) => {
  dragon.x = event.clientX - dragon.width / 2;
  dragon.y = event.clientY - dragon.height / 2;
});

dragon.image.onload = () => {
  update();
};
