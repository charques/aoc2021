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
    board.forEach(row => {
        row.forEach(item => {
            if(item[0] == number) {
                item[1] = true;
            }
        });
    });
    return board;
}

function checkBoardWin(board) {
    // reducer for rows - return tuple
    //  - addition of all not marked positions
    //  - boolean indicating if row is completelly marked
    function reducerRows(previous, current) {
        const value = previous[0] + ((!current[1]) ? current[0] : 0);
        const hit = previous[1] && current[1];
        return [value, hit];
    }
    
    // reducer for columns - return tuple
    //  - addition of all not marked positions
    //  - boolean indicating if column is completelly marked
    function reducerColumns(previous, current) {
        return previous.map((x, i) => {
            var x1 = (!x[1]) ? x[0] : 0 + ((!current[i][1]) ? current[i][0] : 0);
            var x2 = x[1] && current[i][1];
            return [x1, x2];
        });
    }

    // reducer to sum non marked positions
    function reducerSumNonMarked(previous, current) {
        return previous + ((!current[1]) ? current[0] : 0);
    }

    // detect hits per row and column
    const rowsResults = board.map(x => x.reduce(reducerRows, [0, true]));
    const columnsResults = board.reduce(reducerColumns);

    // detect if a row or column is marked
    const isWin = rowsResults.concat(columnsResults).reduce((previous, current) => (previous || current[1]), false);

    // calc sum of all not marked positions
    const sumNotMarked = rowsResults.reduce(reducerSumNonMarked, 0);

    return {
        isWin: isWin,
        sumNotMarked: sumNotMarked
    };
}

function playUntilFirstWin(boards, numbers) {
    for (const number of numbers) {
        for (const board of boards) {
            var boardMarkedResult = checkBoardWin(markBoard(board, number));
            if(boardMarkedResult.isWin) {
                return boardMarkedResult.sumNotMarked * number;
            }
        }
    }
    return 0;
}

function playUntilLastWin(boards, numbers) {
    var boardsWinCounter = Array(boards.length).fill(false);
    for (const number of numbers) {
        for (const [boardIndex, board] of boards.entries()) {
            var boardMarkedResult = checkBoardWin(markBoard(board, number));
            
            if(boardMarkedResult.isWin) {
                boardsWinCounter[boardIndex] = true;
                var completed = boardsWinCounter.reduce((a, b) => a && b, true);
                if(completed) {
                    return boardMarkedResult.sumNotMarked * number;
                }
            }
        }
    }
    return 0;
}

function calulateScoreWinningBoardFirstWin (input) {
    const numbers = parseNumbers(input[0]);
    const boards = parseBoards(input);

    var result = playUntilFirstWin(boards, numbers);
    if(result > 0) {
        return result;
    }

    return 0;
}

function calulateScoreWinningBoardLastWin(input) {
    const numbers = parseNumbers(input[0]);
    const boards = parseBoards(input);

    var result = playUntilLastWin(boards, numbers);
    if(result > 0) {
        return result;
    }
    return 0;
}

module.exports = {
    calulateScoreWinningBoardLastWin: calulateScoreWinningBoardLastWin,
    calulateScoreWinningBoardFirstWin: calulateScoreWinningBoardFirstWin
};