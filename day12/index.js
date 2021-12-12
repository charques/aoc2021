function createTransitions(input) {
    let transitions = new Map();
    let tArray = [];
    input.forEach(element => {
        tArray = element.split("-");
        if((tArray[1] == "start") || (tArray[0] == "end")){
            insertMap(transitions, tArray[1], tArray[0]);
        }
        else if((tArray[0] == "start") || (tArray[1] == "end")) {
            insertMap(transitions, tArray[0], tArray[1]);
        }
        else {
            insertMap(transitions, tArray[0], tArray[1]);
            insertMap(transitions, tArray[1], tArray[0]);
        }
    });
    return transitions;
}

function insertMap(map, key, value) {
    var item = map.get(key);
    if(item != null) {
        item.push(value);
        map.set(key, item);
    }
    else {
        map.set(key, [value]);
    }
}

function findPaths(path, possibleCaveMovesMap, fromCave, finalResult, allowOneSmallCaveTwice) {
    let possibleCaveMoves = possibleCaveMovesMap.get(fromCave);
    let filteredPossibleCaveMoves = filterPossibleCaveMoves(path, possibleCaveMoves, allowOneSmallCaveTwice);

    filteredPossibleCaveMoves.forEach(nextCave => {
        var newPath = [...path];
        newPath.push(nextCave);
        findPaths(newPath, possibleCaveMovesMap, nextCave, finalResult, allowOneSmallCaveTwice);
    });
    
    if(path[path.length-1] == "end") {
        //  console.log("final --- " + path);
        finalResult.push(path);
    }
    return finalResult;
}

function filterPossibleCaveMoves(path, possibleCaveMoves, allowOneSmallCaveTwice) {
    let filteredCaveMoves = [];
    if(possibleCaveMoves) {
        possibleCaveMoves.forEach(caveMove => {
            if(canCaveBeVisited(path, caveMove, allowOneSmallCaveTwice)) {
                filteredCaveMoves.push(caveMove);
            }
        });
    } 
    return filteredCaveMoves;
}

function canCaveBeVisited(path, cave, allowOneSmallCaveTwice) {
    if(path.length <= 1) return true;

    if(!allowOneSmallCaveTwice) {
        if(path.includes(cave) && isLower(cave)) {
            return false;
        }
    }
    else {
        if(isLower(cave) && (cave != "end")) {
            let counter = [];
            let counterOverTwo = 0;
            counter[cave] = 1;
            for (var j = 0; j < path.length; j++) {
                if(isLower(path[j])) {
                    let item = counter[path[j]];
                    counter[path[j]] = (item != null) ? item + 1 : 1;

                    // avoid a second cave to be visited 2 times
                    if (counter[path[j]] == 2) {
                        counterOverTwo++;
                        if(counterOverTwo > 1) {
                            return false;
                        } 
                    }
                    // avoid the same cave to be visited 3 times
                    else if (counter[path[j]] == 3) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

function isLower(str) {
    return /[a-z]/.test(str) && !/[A-Z]/.test(str);
}

function calcPaths(input, allowOneSmallCaveTwice) {
    let finalResult = [];
    let transitions = createTransitions(input);
    findPaths(["start"], transitions, "start", finalResult, allowOneSmallCaveTwice);
    return finalResult.length;
}

module.exports = {
    calcPaths: calcPaths
};