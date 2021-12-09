function parseInput(input) {
    let output = [];
    input.forEach((item, index) => {
        output[index] = item.split("").map(a => parseInt(a));
    });
    return output;
}

function getMatrixValue(matrix, row, column) {
    if(matrix[row] != null) {
        if(matrix[row][column] != null) {
            return matrix[row][column];
        }
    }
    return -1;
}

function isLowPoint(value, top, right, bottom, left) {
    if((top != -1) && (value >= top)) return false;
    if((right != -1) && (value >= right)) return false;
    if((bottom != -1) && (value >= bottom)) return false;
    if((left != -1) && (value >= left)) return false;
    return true;
}

function removeArrayDuplicates(array) {
    let filtered = [];
    array.forEach((e) => {
        const found = filtered.find(element => (element.x == e.x) && (element.y == e.y));
        if(!found) {
            filtered.push(e);
        }
    });
    return filtered;
}

function substractArray(a1, a2) {
    let subs= [];
    a1.forEach((e) => {
        const found = a2.find(element => (element.x == e.x) && (element.y == e.y));
        if(!found) {
            subs.push(e);
        }
    });
    return subs;
}

function findBasinItems(matrix, origins, basinItems) {

    if(origins.length == 0) {
        return basinItems;
    }
    else {
        var finds = [];
        origins.forEach(element => {
            var top = getMatrixValue(matrix, element.x-1, element.y);
            var right = getMatrixValue(matrix, element.x, element.y+1);
            var bottom = getMatrixValue(matrix, element.x+1, element.y);
            var left = getMatrixValue(matrix, element.x, element.y-1);
            if((top != -1) && (top < 9)) 
                finds.push({x: element.x-1, y: element.y});
            if((right != -1) && (right < 9)) 
                finds.push({x: element.x, y: element.y+1});
            if((bottom != -1) && (bottom < 9)) 
                finds.push({x: element.x+1, y: element.y});
            if((left != -1) && (left < 9)) 
                finds.push({x: element.x, y: element.y-1});
        });

        // remove duplicates
        let filtered = removeArrayDuplicates(finds);
        // remove finds already included in basinItems
        let substract = substractArray(filtered, basinItems);
        // already calc basins
        let bItems = basinItems.concat(substract);
        
        return findBasinItems(matrix, substract, bItems);
    }
}

function findLowPoints(matrix) {
    let lowPoints = [];

    for(var rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        var row = matrix[rowIndex];
        for(var columnIndex = 0; columnIndex < row.length; columnIndex++) {
            var top = getMatrixValue(matrix, rowIndex-1, columnIndex);
            var right = getMatrixValue(matrix, rowIndex, columnIndex+1);
            var bottom = getMatrixValue(matrix, rowIndex+1, columnIndex);
            var left = getMatrixValue(matrix, rowIndex, columnIndex-1);
            var value = row[columnIndex];
            if(isLowPoint(value, top, right, bottom, left)) {
                lowPoints.push({x: rowIndex, y: columnIndex});
            }
        }
    }

    return lowPoints;
}

function lowPointsRiskLevels(input) {
    let matrix = parseInput(input);
    let lowPoints = findLowPoints(matrix);

    return lowPoints.reduce((prev, curr) => {
        return prev + (matrix[curr.x][curr.y] + 1);
    }, 0);
}

function lowPointsRiskLevelsAdvanced(input) {
    let matrix = parseInput(input);
    let lowPoints = findLowPoints(matrix);

    let basins = [];
    lowPoints.forEach((lowPoint) => {
        let basin = findBasinItems(matrix, [lowPoint], [lowPoint]);
        basins.push(basin);
    });

    let sortedBasins = basins.sort((firstEl, secondEl) => (firstEl.length > secondEl.length) ? -1 : 1);

    return sortedBasins[0].length * sortedBasins[1].length * sortedBasins[2].length;
}

//05, 
module.exports = {
    lowPointsRiskLevels: lowPointsRiskLevels,
    lowPointsRiskLevelsAdvanced: lowPointsRiskLevelsAdvanced
};