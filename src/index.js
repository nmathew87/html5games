import Paddle from "/src/paddle";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 400;
const GAME_HEIGHT = 400;

ctx.clearRect(0, 0, canvas.width, canvas.height);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);

let lastTime = 0;

function gameLoop(timeStamp) {
  let dt = timeStamp - lastTime;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  paddle.update();
}
