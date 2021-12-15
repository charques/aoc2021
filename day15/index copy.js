function createMatrix(input) {
    let matrix = [];
    input.forEach(element => {
        matrix.push(element.split("").map(x => parseInt(x)));
    });
    return matrix;
}

function pathFinder(matrix, x, y, path, pathRisk, aggregationRisks) {
    if((x == matrix.length-1) && (y== matrix.length-1)) {
        //console.log("path " + path + " - pathRisk " + pathRisk);
        //console.log("pathRisk " + pathRisk);
        aggregationRisks.push({path: path, risk: pathRisk});
        return aggregationRisks;
    }
    // get risk move right
    if(x+1 < matrix[y].length) {
        var newPath1 = [...path];
        newPath1.push({x:x+1, y: y});
        var newRisk1 = pathRisk + matrix[y][x+1];
        pathFinder(matrix, x+1, y, newPath1, newRisk1, aggregationRisks);
    }
    // get risk move down
    if(y+1 < matrix.length) {
        var newPath2 = [...path];
        newPath2.push({x:x, y: y+1});
        var newRisk2 = pathRisk + matrix[y+1][x];
        pathFinder(matrix, x, y+1, newPath2, newRisk2, aggregationRisks);
    }
    return aggregationRisks;
}

function lowestTotalRisk(input) {
    let matrix = createMatrix(input);
    var result = pathFinder(matrix, 0, 0, [{x: 0, y: 0}], 0, []);
    let min = result.reduce((prev, curr) => {
        if(curr.risk < prev) {
            return curr.risk;
        }
        return prev;
    }, 99999999999);
    return min;
}

function pathFinder2(matrix) {

    var solutions = {};

    for(var y = matrix.length-1; y >= 0; y--) {
        for(var x = matrix[y].length-1; x >= 0; x--) {
            var xyNodeSolutions = [];
            var temp = x+1;
            var indexA = "x" + temp + "y" + y;
            var rightNode = solutions[indexA];
            if(rightNode) {
                rightNode.forEach(solution => {
                    //var ii = [{x:x, y:y}].concat(solution);
                    //xyNodeSolutions.push(ii);
                    xyNodeSolutions.push(matrix[y][x] + solution);
                });
            }
            temp = y+1;
            indexA = "x" + x + "y" + temp;
            var bottomNode = solutions[indexA];
            if(bottomNode) {
                bottomNode.forEach(solution => {
                    //var jj = [{x:x, y:y}].concat(solution);
                    //xyNodeSolutions.push(jj);
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

    /*var solutions = {};

    for(var y = matrix.length-1; y >= 0; y--) {
        for(var x = matrix[y].length-1; x >= 0; x--) {
            var xyNodeSolutions = [];
            var temp = x+1;
            var indexA = "x" + temp + "y" + y;
            var rightNode = solutions[indexA];
            if(rightNode) {
                rightNode.forEach(solution => {
                    var ii = [{x:x, y:y}].concat(solution);
                    xyNodeSolutions.push(ii);
                });
            }
            temp = y+1;
            indexA = "x" + x + "y" + temp;
            var bottomNode = solutions[indexA];
            if(bottomNode) {
                bottomNode.forEach(solution => {
                    var jj = [{x:x, y:y}].concat(solution);
                    xyNodeSolutions.push(jj);
                });
            }
            if(!rightNode && !bottomNode) {
                xyNodeSolutions.push([{x:x, y:y}]);
            }
            solutions["x"+x +"y"+y] = xyNodeSolutions;
        }
    } 
    console.log("a");*/


    /*if((x == 0) && (y==0)) {
        return agg;
    }

    pathRisk.forEach()

    // do for x,y

    // invoke x-1, y

    // invoke x, y-1


    if((x == matrix.length-1) && (y== matrix.length-1)) {
        //console.log("path " + path + " - pathRisk " + pathRisk);
        //console.log("pathRisk " + pathRisk);
        aggregationRisks.push({path: path, risk: pathRisk});
        return aggregationRisks;
    }

    var p1 = (prev[y+1][x]) ? (prev[y+1][x]).a : 0;
    var newRisk1 = matrix[y][x] + p1;
    var p2 = (prev[y][x+1]) ? prev[y][x+1] : 0;
    var newRisk2 = matrix[y][x] + p2;

    prev[y][x] = {a: newRisk1, b: newRisk2};

    // get risk move right
    if(x-1 >= 0) {
        pathFinder(matrix, x+1, y, newPath1, newRisk1, aggregationRisks);
    }
    // get risk move down
    if(y+1 < matrix.length) {
        var newPath2 = [...path];
        newPath2.push({x:x, y: y+1});
        var newRisk2 = pathRisk + matrix[y+1][x];
        pathFinder(matrix, x, y+1, newPath2, newRisk2, aggregationRisks);
    }
    return aggregationRisks;*/
}

//function calcRisk(path)

function findMin(array) {
    return  array.reduce((prev, curr) => {
        if(curr < prev) {
            return curr;
        }
        return prev;
    }, 99999999999);
}

function lowestTotalRisk2(input) {
    let matrix = createMatrix(input);
    var result = pathFinder2(matrix);
    let min = result.reduce((prev, curr) => {
        if(curr < prev) {
            return curr;
        }
        return prev;
    }, 99999999999);
    return min - matrix[0][0];
}

module.exports = {
    lowestTotalRisk: lowestTotalRisk,
    lowestTotalRisk2: lowestTotalRisk2
};