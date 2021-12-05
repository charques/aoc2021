
function prepareLinesAndBoard(rawInput, includeDiagonals) {
    var filteredLines = [];
    var hMax = 0;
    var vMax = 0;
    const myRegex = /\w+/g;
    rawInput.forEach(item => {
        let lineCoords = item.match(myRegex).map(x => parseInt(x));
        let a = lineCoords[0] - lineCoords[2];
        let b = lineCoords[1] - lineCoords[3];
        // horizontal, vertical and diagonal
        if ( ((a == 0) || (b == 0)) || ((includeDiagonals) && (Math.abs(a) == Math.abs(b))) ) {
            filteredLines.push(lineCoords);
        }
        hMax = Math.max(lineCoords[0], lineCoords[2], hMax);
        vMax = Math.max(lineCoords[1], lineCoords[3], vMax);
    });

    return {
        lines: filteredLines,
        board: Array(vMax+1).fill(0).map(()=>Array(hMax+1).fill(0))
    };
}

function calcMovesAndMarkBoard(board, lines) {

    lines.forEach(line => {
        var moves = [];
        var newX = 0;
        var newY = 0;
        
        // add origen
        moves.push([line[0], line[1]]);

        // calc steps
        const moveX = line[2]-line[0];
        const moveY = line[3]-line[1];
        
        // calc horizontal moves
        if(moveX != 0 && moveY == 0) {
            for(var i = 1; i < Math.abs(moveX); i++) {
                newX = (line[0] < line[2]) ? line[0]+i : line[0]-i;
                moves.push([newX, line[1]]);
            }
        }
        // calc vertical moves
        if(moveX == 0 && moveY != 0) {
            for(var j = 1; j < Math.abs(moveY); j++) {
                newY = (line[1] < line[3]) ? line[1]+j : line[1]-j;
                moves.push([line[0], newY]);
            }
        }
        // calc diagonal moves
        if(moveX != 0 && moveY != 0) {
            for(var k = 1; k < Math.abs(moveX); k++) {
                newX = (line[0] < line[2]) ? line[0]+k : line[0]-k;
                newY = (line[1] < line[3]) ? line[1]+k : line[1]-k;
                moves.push([newX, newY]);
            }
        }
        // add destination
        moves.push([line[2], line[3]]);

        // mark moves
        moves.forEach(move => {
            var x = move[0];
            var y = move[1];
            board[y][x] = board[y][x] + 1;
        });

    }); 

    return board;
}

function calulateOverlaps(input, includeDiagonals) {
    const { lines, board } = prepareLinesAndBoard(input, includeDiagonals);

    // apply lines to board
    const markedBoard = calcMovesAndMarkBoard(board, lines);

    // count items with value > 1
    const counter = markedBoard.reduce((count, row) => row.filter(item => item > 1).length + count, 0);

    return counter;
}

module.exports = {
    calulateOverlaps: calulateOverlaps
};