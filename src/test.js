


let line = [1,2,2,4];
// 1, 4, 4, 0

let newLine = line.map((v, i) => {
    if (v === line[i+1]) {
       return v + line[i+1];
    } else {
       return v;
   } 
});


for (let i = 0; i < line.length-1; i++) {
    if (line[i] === line[i+1]) {
            line[i] += line[i + 1];
            line = line.filter(e => e !== line[i+1]);
            line.push(0);
    }
}

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


let _grid = [...Array(4).keys()].map(e => [...Array(4).keys()].map(e => 0));
function toString() {
    string = "";

    _grid.map(e => string += "[" + e  + "]" + "   ");
    return string;
}

newtile = () => {

    let grid = [...Array(4).keys()].map(e => [...Array(4).keys()].map(e => 0));
    let elem = 42;
    let zero_ind = 42;
    let weighted_list = [...Array(100).keys()].map(i => i < 90 ? 2 : 4);
    
    while (elem != 0) {
        zero_ind = [Math.floor(Math.random() * 4), 
            Math.floor(Math.random() * 4)];

        elem = grid[zero_ind[0]][zero_ind[1]];
    }
    grid[zero_ind[0]][zero_ind[1]] = weighted_list[Math.floor(Math.random() * weighted_list.length)];

    return grid;
};

remove_offsets = (offsets_list) => {
    let newArr = [];
    for (let i = 0; i < offsets_list.length; i++) {
        if (offsets_list[i] !== offsets_list[i+1]) {
            newArr.push(offsets_list[i]);
        }
    }
    return newArr;
}

// console.log(merge([4,2,4,4]), toString(), newtile());

