const DAYS = 7;

function parseInput(input) {
    const myRegex = /\w+/g;
    return input.match(myRegex).map(x => parseInt(x));
}


function calcLanternfish(input, days) {
    const state = parseInput(input);

    function process(state) {
        let newA = [];
        let toAdd = 0;
        state.forEach(item => {
            if(item == 0) {
                newA.push(6);
                toAdd++;
            }
            else if(item < 9) {
                newA.push(item-1);
            }
        });
        for (let step = 0; step < toAdd; step++) {
            newA.push(8);
        }
        return newA;
    }

    function factorial(state, days) {
        if (days == 0) {
            return state;
        }
        else {
            const newState = process(state);
            return factorial(newState, days - 1);
        }
    }

    let result = factorial(state, days);

    return result.length;
}

module.exports = {
    calcLanternfish: calcLanternfish
};