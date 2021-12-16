function createMatrix(input) {
    let matrix = [];
    input.forEach(element => {
        matrix.push(element.split("").map(x => parseInt(x)));
    });
    return matrix;
}

function createExtendedMatrix(input, loops) {
    var result = [];
    input.forEach((element, index) => {
        var t = element.split("").map(x => parseInt(x));
        var extendedRow = createExtendedRow(t, loops);
        var t2 = [...extendedRow];
        for(var i = 0; i < loops; i++) {
            if(i > 0) {
                t2 = t2.map(x => {
                    if(x == 9) x = 0;
                    return x+1;
                });
            }
            result[(i*input.length)+index] = t2;
        }
        //console.log(extendedRow);
    });
    return result;
}

function createExtendedRow(origin, loops) {
    var rtotal = [];
    var t = [...origin];
    for(var i = 0; i < loops; i++) {
        if(i > 0) {
            t = t.map(x => {
                if(x == 9) x = 0;
                return x+1;
            });
        }
        rtotal = rtotal.concat(t);
    }
    return rtotal;
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

function calcRiskLevel2(input) {
    let matrix = createExtendedMatrix(input, 5);
    var result = riskCalc(matrix);
    let min = findMin(result);
    return min - matrix[0][0];
}

module.exports = {
    calcRiskLevel: calcRiskLevel,
    calcRiskLevel2: calcRiskLevel2
};