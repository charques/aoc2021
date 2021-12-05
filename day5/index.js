
function parseLines(rawInput) {
    var lines = [];
    var hMin = 999999999;
    var vMin = 999999999;
    var hMax = 0;
    var vMax = 0;
    const myRegex = /\w+/g;
    for(var i = 0, rowCounter = 0; i < rawInput.length; i++, rowCounter++) {
        var line = rawInput[i].match(myRegex).map(x => parseInt(x));
        if ((line[0] == line[2]) || (line[1] == line[3])) {
            lines.push(line);
            const thMin = Math.min(line[0], line[2]);
            const thMax = Math.max(line[0], line[2]);
            const tvMin = Math.min(line[1], line[3]);
            const tvMax = Math.max(line[1], line[3]);
            hMin = (thMin < hMin) ? thMin : hMin;
            hMax = (thMax > hMax) ? thMax : hMax;
            vMin = (tvMin < vMin) ? tvMin : vMin;
            vMax = (tvMax > vMax) ? tvMax : vMax;
        }
    }
    return {
        lines: lines,
        hMax: hMax,
        vMax: vMax
    };
}

function createBoard(sizeX, sizeY) {
    return Array(sizeY).fill(0).map(()=>Array(sizeX).fill(0));
}

function markBoard(board, line) {
    const moveX = line[2]-line[0];
    const moveY = line[3]-line[1];

    var moves = [];

    moves.push([line[0], line[1]]);
    
    if(moveX != 0) {
        for(var i = 1; i < Math.abs(moveX); i++) {
            var newX = (line[0] < line[2]) ? line[0]+i : line[0]-i;
            moves.push([newX, line[1]]);
        }
        
    }
    if(moveY != 0) {
        for(var i = 1; i < Math.abs(moveY); i++) {
            var newY = (line[1] < line[3]) ? line[1]+i : line[1]-i;
            moves.push([line[0], newY]);
        }
    }
    
    moves.push([line[2], line[3]]);

    moves.forEach(move => {
        var x = move[0];
        var y = move[1];
        board[y][x] = board[y][x] + 1;
    });

    return 0;
}

function calulateOverlaps(input) {
    const lines = parseLines(input);
    const board = createBoard(lines.hMax+1, lines.vMax+1);

    for (const line of lines.lines) {
        markBoard(board, line);
    }

    var counter = 0;
    board.forEach(row => {
        row.forEach(item => {
            if(item > 1) {
                counter++;
            }
        });
    });

    return counter;
}

module.exports = {
    calulateOverlaps: calulateOverlaps
};