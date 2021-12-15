function createMatrix(input) {
    let matrix = [];
    input.forEach(element => {
        matrix.push(element.split("").map(x => parseInt(x)));
    });
    return matrix;
}

function riskCalc(matrix) {
    var solutions = {};
    for(var y = matrix.length-1; y >= 0; y--) {
        for(var x = matrix[y].length-1; x >= 0; x--) {
            var xyNodeSolutions = [];
            var temp = x+1;
            var indexA = "x" + temp + "y" + y;
            var rightNode = solutions[indexA];
            if(rightNode) {
                rightNode.forEach(solution => {
                    xyNodeSolutions.push(matrix[y][x] + solution);
                });
            }
            temp = y+1;
            indexA = "x" + x + "y" + temp;
            var bottomNode = solutions[indexA];
            if(bottomNode) {
                bottomNode.forEach(solution => {
                    xyNodeSolutions.push(matrix[y][x] + solution);
                });
            }
            if(!rightNode && !bottomNode) {
                xyNodeSolutions.push(matrix[y][x]);
            }
            var xx = findMin(xyNodeSolutions);
            solutions["x"+x +"y"+y] = [xx];
        }
    } 
    return solutions["x0y0"];
}

function findMin(array) {
    return  array.reduce((prev, curr) => {
        if(curr < prev) {
            return curr;
        }
        return prev;
    }, 99999999999);
}

function calcRiskLevel(input) {
    let matrix = createMatrix(input);
    var result = riskCalc(matrix);
    let min = findMin(result);
    return min - matrix[0][0];
}

module.exports = {
    calcRiskLevel: calcRiskLevel
};