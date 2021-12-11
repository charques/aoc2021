const TO_FLASH = "TO_FLASH";
const STANDBY = "STANDBY";
const FLASHED = "FLASHED";

function createMatrix(input) {
    let matrix = [];
    input.forEach(element => {
        matrix.push(element.split("").map(x => [parseInt(x), STANDBY]));
    });
    return matrix;
}

function incStep(matrix) {
    let newMatrix = [];
    matrix.forEach((row, index) => {
        let newRow = row.map(element => {
            let v = element[0] + 1;
            let s = (v > 9) ? TO_FLASH : STANDBY;
            return [v, s];
        });
        newMatrix[index] = newRow;
    });
    return newMatrix;
}

function resetMatrix(matrix) {
    for(var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix[i].length; j++) {
            let element = matrix[i][j];
            element[1] = STANDBY;
        }
    }
    return matrix;
}

function getPendingToFlash(matrix) {
    let toFlash = [];
    for(var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix[i].length; j++) {
            let element = matrix[i][j];
            if(element[1] == TO_FLASH) {
                toFlash.push({x: i, y: j});
            }
        }
    }
    return toFlash;
}

function checkCoord(matrix, x, y) {
    return (matrix[x] != null) && (matrix[x][y] != null);
}

function applyFlashToCoord(matrix, x, y) {
    if(checkCoord(matrix, x, y)) {
        let item = matrix[x][y];
        if((item[1] != FLASHED) && (item[1] != TO_FLASH)) {
            item[0] += 1;
            item[1] = (item[0] > 9) ? TO_FLASH : STANDBY;
            matrix[x][y] = item;
        }
    }   
    return matrix;
}

function executeFlash(matrix, toFlashCoord) {
    let item = matrix[toFlashCoord.x][toFlashCoord.y];
    
    matrix[toFlashCoord.x][toFlashCoord.y] = [item[0]-10, FLASHED];
    matrix = applyFlashToCoord(matrix, toFlashCoord.x-1, toFlashCoord.y-1);
    matrix = applyFlashToCoord(matrix, toFlashCoord.x, toFlashCoord.y-1);
    matrix = applyFlashToCoord(matrix, toFlashCoord.x+1, toFlashCoord.y-1);
    matrix = applyFlashToCoord(matrix, toFlashCoord.x+1, toFlashCoord.y);
    matrix = applyFlashToCoord(matrix, toFlashCoord.x+1, toFlashCoord.y+1);
    matrix = applyFlashToCoord(matrix, toFlashCoord.x, toFlashCoord.y+1);
    matrix = applyFlashToCoord(matrix, toFlashCoord.x-1, toFlashCoord.y+1);
    matrix = applyFlashToCoord(matrix, toFlashCoord.x-1, toFlashCoord.y);
    return matrix;
}

function calcFlashes(input, steps) {
    let matrix = createMatrix(input);

    let numFlashes = 0;

    for(var i = 0; i < steps; i++) {
        matrix = resetMatrix(matrix);
        matrix = incStep(matrix);
        do {
            let toFlash = getPendingToFlash(matrix);
            numFlashes += toFlash.length;
            if(toFlash.length == 0) break;
            for(var j = 0; j < toFlash.length; j++) {
                matrix = executeFlash(matrix, toFlash[j]);
            }
        } while(true);
    }
    return numFlashes;
}

module.exports = {
    calcFlashes: calcFlashes
};