function parseInput(input) {
    let output = [];
    input.forEach((item, index) => {
        output[index] = item.split("").map(a => parseInt(a));
    });
    return output;
}

function matrixValue(matrix, row, column) {
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

function lowPointsRiskLevels(input) {
    let matrix = parseInput(input);

    let lowPoints = [];

    for(var rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        var row = matrix[rowIndex];
        for(var columnIndex = 0; columnIndex < row.length; columnIndex++) {
            var top = matrixValue(matrix, rowIndex-1, columnIndex);
            var right = matrixValue(matrix, rowIndex, columnIndex+1);
            var bottom = matrixValue(matrix, rowIndex+1, columnIndex);
            var left = matrixValue(matrix, rowIndex, columnIndex-1);
            var value = row[columnIndex];
            if(isLowPoint(value, top, right, bottom, left)) {
                //lowPoints.push([value, rowIndex, columnIndex]);
                //console.log("row:" + rowIndex + " - column: " + columnIndex + " - value: "+ value+ " - top: "+ top+ " - bottom: "+ bottom+ " - left: "+ left+ " - right: "+ right);
                lowPoints.push(value + 1);
            }
        }
    }

    return lowPoints.reduce((prev, curr) => prev + curr);
}


module.exports = {
    lowPointsRiskLevels: lowPointsRiskLevels
};