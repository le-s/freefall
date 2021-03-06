import Game from "./game.js";
// import assets from './assets.js';
import setupControlListeners from './car_controls.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  canvas.height = 700;
  canvas.width = 500;
  let game = new Game(canvas, ctx);
  document.getElementById("how").innerHTML = `Use directional arrows or WASD to move your car around. Collect as much cash as you can to increase your points while avoiding the rocks!`;
  
  document.getElementById("play-btn").addEventListener("click", () => {

    if (game.gameOver === true) {
      game.cleanUp();
      game = new Game(canvas, ctx);
    }
    
    setupControlListeners(game);
    
    game.start();
  })
});
