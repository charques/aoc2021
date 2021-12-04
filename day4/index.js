function parseNumbers(rawNumbers) {
    return (rawNumbers.split(',')).map(x => parseInt(x));
}
function parseBoards(rawInput) {
    let boards = [];
    var board = [];
    const myRegex = /\w+/g;
    for(var i = 2, rowCounter = 0; i < rawInput.length; i++, rowCounter++) {
        board.push(rawInput[i].match(myRegex).map(x => [parseInt(x), false]));
        if(rowCounter == 4) {
            boards.push(board);
            board = [];
            rowCounter = -1;
            i++;
        }
    }
    return boards;
}



function markBoard(board, number) {
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[i].length; j++) {
            if(board[i][j][0] == number) {
                board[i][j][1] = true;
            }
        }
    }
    return board;
}

function checkBoardWin(board) {
    function reducerRows(previous, current) {
        const value = previous[0] + ((!current[1]) ? current[0] : 0);
        const hit = previous[1] && current[1];
        return [value, hit];
    }
    const rowsResults = board.map(x => x.reduce(reducerRows, [0, true]));
    
    const columnsResults = board.reduce((a, b) => a.map((x, i) => {
        var x1 = (!x[1]) ? x[0] : 0 + ((!b[i][1]) ? b[i][0] : 0);
        var x2 = x[1] && b[i][1];
        return [x1, x2];
    }));

    function reducerWin(previous, current) {
        return previous || current[1];
    }

    function reducerSumNonMarked(previous, current) {
        return previous + ((!current[1]) ? current[0] : 0);
    }

    const concat = rowsResults.concat(columnsResults);
    const win = concat.reduce(reducerWin, false);
    const sum = rowsResults.reduce(reducerSumNonMarked, 0);

    return {
        win: win,
        sum: sum
    };
}

function playUntilFirstWin(boards, numbers) {
    for (var i = 0; i < numbers.length; i++) {
        for(var j = 0; j < boards.length; j++) {
            var markedBoard = markBoard(boards[j], numbers[i]);
            var winObject = checkBoardWin(markedBoard);
            
            if(winObject.win) {
                return winObject.sum * numbers[i];
            }
        }
    }
    return 0;
}

function playUntilLastWin(boards, numbers) {
    var boardsWinTotal = Array(boards.length).fill(false);
    for (var i = 0; i < numbers.length; i++) {
        for(var j = 0; j < boards.length; j++) {
            //console.log("number " + numbers[i])
            var markedBoard = markBoard(boards[j], numbers[i]);
            var boardWinResult = checkBoardWin(markedBoard);
            
            if(boardWinResult.win) {
                boardsWinTotal[j] = true;
                var final = boardsWinTotal.reduce((a, b) => a && b, true);
                if(final) {
                    return boardWinResult.sum * numbers[i];
                }
            }
        }
    }
    return 0;
}

exports.calulateScoreWinningBoardFirstWin = function (input) {
    const numbers = parseNumbers(input[0]);
    const boards = parseBoards(input);

    var result = playUntilFirstWin(boards, numbers);
    if(result > 0) {
        return result;
    }

    return 0;
};

exports.calulateScoreWinningBoardLastWin = function (input) {
    const numbers = parseNumbers(input[0]);
    const boards = parseBoards(input);

    var result = playUntilLastWin(boards, numbers);
    if(result > 0) {
        return result;
    }
    return 0;
};