function getCoordsAndFolds(input) {
    let coords = [];
    let folds = [];
    let maxX = 0;
    let maxY = 0;
    for(var i= 0; i < input.length; i++) {
        if(input[i] == "") break;
        var coord = input[i].split(",");
        var coordObj = {x: parseInt(coord[0]), y: parseInt(coord[1])};
        maxX = (coordObj.x > maxX) ? coordObj.x : maxX;
        maxY = (coordObj.y > maxY) ? coordObj.y : maxY;
        coords.push(coordObj);
    }
    for(i += 1; i < input.length; i++) {
        var fold = input[i].replace('fold along ', '').split("=");
        folds.push({type: fold[0], index: parseInt(fold[1])});
    }
    return {coords: coords, folds: folds, maxX: maxX+1, maxY: maxY+1};
}

function createDotMatrix(coords, maxX, maxY) {
    let matrix = new Array(maxY).fill(0).map(() => new Array(maxX).fill(0));
    coords.forEach(element => {
        matrix[element.y][element.x] = 1;
    });
    return matrix;
}

function fold(dotMatrix, foldItem) {
    if(foldItem.type == "y") {
        for(var i = foldItem.index + 1, j = 1; i < dotMatrix.length; i++, j++) {
            for(var k = 0; k < dotMatrix[i].length; k++) {
                dotMatrix[foldItem.index-j][k] += dotMatrix[i][k];
            }
        }
        dotMatrix.splice(foldItem.index);
        return dotMatrix;
    }
    else {
        for(var i = 0; i < dotMatrix.length; i++) {
            for(var k = foldItem.index + 1, j = 1; k < dotMatrix[i].length; k++, j++) {
                dotMatrix[i][foldItem.index-j] += dotMatrix[i][k];
            }
            dotMatrix[i].splice(foldItem.index);
        }
        return dotMatrix;
    }
    return null;
}

function countDots(matrix) {
    var sum = matrix.reduce((acc, arr) => {
        for (const item of arr) {
            if(item > 0) acc++;
        }
        return acc;
    }, 0);
    return sum;
}

function toString(matrix) {
    var sum = matrix.reduce((acc, arr) => {
        for (const item of arr) {
            acc = (item > 0) ? acc + "#" : acc + ".";
        }
        return acc + "\n";
    }, "");
    return sum;
}

function visibleDots(input) {
    let { coords, folds, maxX, maxY} = getCoordsAndFolds(input);
    let dotMatrix =  createDotMatrix(coords, maxX, maxY);
    let foldedMatrix = fold(dotMatrix, folds[0]);

    return countDots(foldedMatrix);
}

function visibleDotsComplete(input) {
    let { coords, folds, maxX, maxY} = getCoordsAndFolds(input);
    let dotMatrix =  createDotMatrix(coords, maxX, maxY);
    for(var i = 0; i < folds.length; i++) {
        fold(dotMatrix, folds[i]);
    }
    console.log(toString(dotMatrix));
    return countDots(dotMatrix);
}

module.exports = {
    visibleDots: visibleDots,
    visibleDotsComplete: visibleDotsComplete
};