function createTransitions(input) {
    let transitions = new Map();
    input.forEach(element => {
        let tArray = element.split("-");
        if(tArray[1] == "start") {
            insertMap(transitions, tArray[1], tArray[0]);
        }
        else if(tArray[0] == "start") {
            insertMap(transitions, tArray[0], tArray[1]);
        }
        else if(tArray[1] == "end") {
            insertMap(transitions, tArray[0], tArray[1]);
        }
        else if(tArray[0] == "end") {
            insertMap(transitions, tArray[1], tArray[0]);
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

function findPaths(path, transitions, from, finalResult, allowOneTwice) {
    let possibleTransitions = transitions.get(from);
    if(possibleTransitions != null) {
        let filteredPossibleTransitions = filterTransitions(path, possibleTransitions, allowOneTwice);
        if(filteredPossibleTransitions != null) {
            for(var i = 0; i < filteredPossibleTransitions.length; i++) {
                var res = [...path];
                res.push(filteredPossibleTransitions[i]);
                //console.log(res);
                findPaths(res, transitions, filteredPossibleTransitions[i], finalResult, allowOneTwice);
            }
        }
    }
    if(path[path.length-1] == "end") {
        //  console.log("final --- " + path);
        finalResult.push(path);
    }
    return finalResult;
}

function filterTransitions(path, transitions, allowOneTwice) {
    let filteredTransitions = [];
    transitions.forEach(transition => {
        if(canCaveBeVisited(path, transition, allowOneTwice)) {
            filteredTransitions.push(transition);
        }
    });
    return filteredTransitions;
}

function canCaveBeVisited(path, cave, allowOneTwice) {
    if(path.length > 1) {
        if(!allowOneTwice) {
            for (var i = 0; i < path.length; i++) {
                if ((path[i] == cave) && isLower(cave)) {
                    return false;
                }
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
                        if (counter[path[j]] == 2) {
                            counterOverTwo++;
                            if(counterOverTwo > 1) {
                                return false;
                            } 
                        }
                        else if (counter[path[j]] == 3) {
                            return false;
                        }
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

function calcPaths(input, allowOneTwice) {
    let finalResult = [];
    let transitions = createTransitions(input);
    findPaths(["start"], transitions, "start", finalResult, allowOneTwice);
    return finalResult.length;
}

module.exports = {
    calcPaths: calcPaths
};