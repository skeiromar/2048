import TwentyFourtyEight from './gameLogic';

// const tilesAsset = document.getElementById("tile-asset");
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
        // this._frame = simplegui.create_frame('2048',
        //                 this._cols * TILE_SIZE + 2 * BORDER_SIZE,
        //                 this._rows * TILE_SIZE + 2 * BORDER_SIZE)
        // this._frame.add_button('New Game', this.start)
        // this._frame.set_keydown_handler(this.keydown)
        // this._frame.set_draw_handler(this.draw)
        // this._frame.set_canvas_background("#BCADA1")
        // this._frame.start()
        this._game = game;
        // this._game.move("LEFT");
        this._directions = {"ArrowUp": 'UP', "ArrowDown": DOWN,
                            "ArrowLeft": "LEFT", "ArrowRight": RIGHT}
    }
    keydown(key) {

        // for dirstr, dirval in self._directions.items():
        //     if key == simplegui.KEY_MAP[dirstr]:
        //         self._game.move(dirval)
        //         break

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

            // for (let key in this._directions) {
            //     // debugger
            //     if (key === event.key) {
            //         // debugger
            //         this._game.move(this._directions.key);
            //         // debugger
            //         break;
            //     }
            // }

        }, false);

    }
    test() {
        const try1 = new TwentyFourtyEight(4,4);
        window.try1 = try1;
        console.log(try1.toString());
        console.log(try1._grid);
        console.log(try1._init_tiles);

        // try1.move("LEFT");

        console.log(try1.toString());
    }

    draw(ctx) {
        // for row in range(self._rows):
        // for col in range(self._cols):
        //     tile = self._game.get_tile(row, col)
        //     if tile == 0:
        //         val = 0
        //     else:
        //         val = int(math.log(tile, 2))
        //     canvas.draw_image(self._tiles,
                // [HALF_TILE_SIZE + val * TILE_SIZE, HALF_TILE_SIZE],
                // [TILE_SIZE, TILE_SIZE],
                // [col * TILE_SIZE + HALF_TILE_SIZE + BORDER_SIZE,
                //  row * TILE_SIZE + HALF_TILE_SIZE + BORDER_SIZE],
                // [TILE_SIZE, TILE_SIZE])
        function getBaseLog(y, x) {
            return Math.log(y) / Math.log(x);
        }
        // debugger
        for (let row = 0; row < this._rows; row++) {
            for (let col = 0; col < this._cols; col++) {
                let tile = this._game.get_tile(row, col);
                
                let val;
                if (tile === 0) {
                    val = 0;
                } else {
                    val = Math.floor(getBaseLog(tile, 2));
                }
                // debugger
                ctx.drawImage(this.tilesAsset,  
                    50 + HALF_TILE_SIZE + val * TILE_SIZE - 100, HALF_TILE_SIZE-50,
                    TILE_SIZE, TILE_SIZE,
                    col * TILE_SIZE + HALF_TILE_SIZE + BORDER_SIZE - 45,
                    row * TILE_SIZE + HALF_TILE_SIZE + BORDER_SIZE - 45,
                    TILE_SIZE, TILE_SIZE);
            }
        }
        // ctx.drawImage(this.tilesAsset, 33, 71);

    }

    start() {
        this._game.reset();
    }
    

}

export default TwentyFourtyEightGui;

// const square = new Rectangle(10, 10);


