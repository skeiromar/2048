

const UP = 1;
const DOWN = 2;
const LEFT = 3;
const RIGHT = 4;

const OFFSETS = {
    UP: [1, 0],
    DOWN: [-1, 0],
    LEFT: [0, 1],
    RIGHT: [0, -1]
};

function merge(line1) {

    // merges a single row/ column

    let line = line1.filter(i => i !== 0);

    for (let i = 0; i < line1.length; i++) {
        if (line1[i] === 0) {
            line.push(line1[i]);
        }
    }
    // add two like values 
    // remove the value that was added 
    // add 0 at the end 

    for (let i = 0; i < line.length-1; i++) {
        if (line[i] === line[i+1]) {
                line[i] += line[i + 1];
                line = line.filter((e, j) => j !== i+1);
                line.push(0);
        }
    }
            
    return line;
}

class TwentyFourtyEight {

    
    constructor(gridHeight, gridWidth) {
        this._grid_height = gridHeight;
        this._grid_width = gridWidth;
        this._is_moved = false;
        this._grid = [];

        this._width_height_max = Math.max(this._grid_width, this._grid_height);
        this._init_tiles = {
            UP    : [...Array(this._grid_width).keys()].map((i) => [0,i]), 
            DOWN  : [...Array(this._grid_width).keys()].map((i) => [this._grid_height-1,i]), 
            LEFT  : [...Array(this._grid_height).keys()].map((i) => [i,0]), 
            RIGHT : [...Array(this._grid_height).keys()].map((i) => [i, this._grid_width-1])
        };  
        this.reset();
    }
    toString() {
        let string = "";
    
        this._grid.map(e => string += "[" + e  + "]" + "\n");
        return string;
    }
    get_grid_height() {
        return this._grid_height;
    }

    get_grid_width() {
        return this._grid_width;
    }

    reset() {

        // self._grid = [[0 for dummy_num in range(self._grid_width)]
        // for dummy_num in range(self._grid_height)]

        this._grid = [...Array(4).keys()].map(e => [...Array(4).keys()].map(e => 0));
        
        
        this.new_tile();
        this.new_tile();
    }
    remove_offsets(offsets_list) {
        let newArr = [];
        for (let i = 0; i < offsets_list.length; i++) {
            if (offsets_list[i] !== offsets_list[i+1]) {
                newArr.push(offsets_list[i]);
            }
        }
        return newArr;
    }
    
    move(direction) {
        console.log(this.toString());
        for (let key in this._init_tiles) {
            if (direction === key) {
                for (let et = 0; et < this._init_tiles[key].length; et++) {
                    let each_tile = this._init_tiles[key][et];
                    let offsets = [];
                    let temp_list = [];
                    let col = 0;
                    let row = 0;
                    for (let tile = 0; tile < this._width_height_max; tile++) {
                        // debugger
                        offsets.push([each_tile[0] + OFFSETS[key][0] * col,
                            each_tile[1] + OFFSETS[key][1] * row]);
                        
                        if (tile < this._grid_height - 1) {
                            col += 1;
                        }    
                        if (tile < this._grid_width - 1) {
                            row += 1;
                        }
                    }
                    offsets = this.remove_offsets(offsets);
                    for (let off = 0; off < offsets.length; off++) {
                        let offset = offsets[off];
                        temp_list.push(this._grid[offset[0]][offset[1]]);
                    }
                    temp_list = merge(temp_list);
                    for (let i = 0; i < offsets.length; i++) {
                        let offset = offsets[i];
                        if (this._grid[offset[0]][offset[1]] !== temp_list[i]) {
                            this._is_moved = true;
                        }
                        this._grid[offset[0]][offset[1]] = temp_list[i];
                    }
                }
            }

        }
        if (this._is_moved) {
            this.new_tile();
        }
        console.log(this.toString());

    }
    new_tile() {
        // debugger
        let elem = 42;
        let zero_ind = 42;
        let weighted_list = [...Array(100).keys()].map(i => i < 90 ? 2 : 4);
        
        while (elem != 0) {
            zero_ind = [Math.floor(Math.random() * this._grid_height), 
                Math.floor(Math.random() * this._grid_width)];

            elem = this._grid[zero_ind[0]][zero_ind[1]];
        }
        this._grid[zero_ind[0]][zero_ind[1]] = weighted_list[Math.floor(Math.random() * weighted_list.length)];
    }

    set_tile(row, col, value) {
        this._grid[row][col] = value;
    }
    get_tile(row, col) {
        return(this._grid[row][col]);
    }

}
export default TwentyFourtyEight;

// // const square = new Rectangle(10, 10);
// const try1 = new TwentyFourtyEight(4,4);

// console.log(try1.toString());
// console.log(try1._grid);
// console.log(try1._init_tiles);

// // try1.move("LEFT");

// console.log(try1.toString());
