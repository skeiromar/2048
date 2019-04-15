
const TILE_SIZE = 100;
const HALF_TILE_SIZE = TILE_SIZE / 2;
const BORDER_SIZE = 45;

const UP = 1;
const DOWN = 2;
const LEFT = 3;
const RIGHT = 4;

class TwentyFourtyEightGui {
    constructor(game) {
        this.tilesAsset = document.getElementById("tile-asset");
        this._rows = game.get_grid_height();
        this._cols = game.get_grid_width();
        this._game = game;
    }
    keydown(key) {

        document.addEventListener('keydown', (event) =>  {
            console.log(this);
            if ("ArrowLeft" === event.key) 
                this._game.move("LEFT");
            else if ("ArrowRight" === event.key)
                this._game.move("RIGHT");
            else if ("ArrowUp" === event.key)
                this._game.move("UP");
            else if ("ArrowDown" === event.key)
                this._game.move("DOWN");

        }, false);

    }

    draw(ctx) {
        function getBaseLog(y, x) {
            return Math.log(y) / Math.log(x);
        }
        for (let row = 0; row < this._rows; row++) {
            for (let col = 0; col < this._cols; col++) {
                let tile = this._game.get_tile(row, col);
                
                let val;
                if (tile === 0) {
                    val = 0;
                } else {
                    val = Math.floor(getBaseLog(tile, 2));
                }
                ctx.drawImage(this.tilesAsset,  
                    50 + HALF_TILE_SIZE + val * TILE_SIZE - 100, HALF_TILE_SIZE-50,
                    TILE_SIZE, TILE_SIZE,
                    col * TILE_SIZE + HALF_TILE_SIZE + BORDER_SIZE - 45,
                    row * TILE_SIZE + HALF_TILE_SIZE + BORDER_SIZE - 45,
                    TILE_SIZE, TILE_SIZE);
            }
        }
    }

    start() {
        this._game.reset();
    }

}

export default TwentyFourtyEightGui;



