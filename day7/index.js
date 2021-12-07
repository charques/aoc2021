function parseInput(input) {
    const myRegex = /\w+/g;
    return input.match(myRegex).map(x => parseInt(x));
}

function summatory (n) {
	var total = 0; 
	for (var i = 1; i <= n; i++) {
		total += i; 
	}
	return total;
}

function calcByIndex(positions, index, applySummatory) {
    var difference = 0;
    var count = 0;
    positions.forEach(((element) => {
        difference = Math.abs(element - index);
        count = (!applySummatory) ? count + difference : count + summatory(difference);
    }));
    return count;
}

function calcFuel(input, applySummatory) {
    const values = parseInput(input);
      
    let orderedPositions = values.sort((a, b) => ( a > b ) ? -1 : 1);
    let fuelCosts = [];
    let prev = 0;
    for(var i = 0; i < orderedPositions[0]; i++) {
        var count = calcByIndex(orderedPositions, i, applySummatory);
        fuelCosts[i] = count;
        if ((prev > 0) && (count > prev)) {
            break;
        }
        prev = count;
    }

    let shortedFuelCosts = fuelCosts.sort((a, b) => ( a > b ) ? 1 : -1);

    return shortedFuelCosts[0];
}

module.exports = {
    calcFuel: calcFuel
};