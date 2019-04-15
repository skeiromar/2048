import TwentyFourtyEightGui from './gameRender';
import TwentyFourtyEight from './gameLogic';

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#BCADA1";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const game = new TwentyFourtyEight(4,4);
    const la = new TwentyFourtyEightGui(game);
    
    la.start();
    la.keydown();
    
    setInterval(() => {
        la.draw(ctx);
    }, 16);
});