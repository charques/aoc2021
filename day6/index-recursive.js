function parseInput(input) {
    const myRegex = /\w+/g;
    return input.match(myRegex).map(x => parseInt(x));
}

function calcLanternfish(input, days) {
    const state = parseInput(input);

    function process(state) {
        let newA = [];
        let toAdd = 0;
        for (var i=0; i <state.length; i++) {
            if(state[i] == 0) {
                newA.push(6);
                toAdd++;
            }
            else if(state[i] < 9) {
                newA.push(state[i]-1);
            }
        }
        for (let step = 0; step < toAdd; step++) {
            newA.push(8);
        }
        return newA;
    }

    function recursive(days, state) {
        if (days == 0) {
            return state;
        }
        else {
            return recursive(days - 1, process(state));
        }
    }

    let result = recursive(days, state);
    return result.length;
}


module.exports = {
    calcLanternfish: calcLanternfish
};