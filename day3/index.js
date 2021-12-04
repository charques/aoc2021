function parseBinary(binaryString) {
    return (binaryString.split('')).map(x => parseInt(x));
}
function binaryArrayToInt(binaryArray) {
    return parseInt(binaryArray.join(''), 2);
}

exports.powerConsumption = function (input) {
    const numItems = input.length;

    const matrix = input.map(x => parseBinary(x));
    const summatoryColumns = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

    const gammaArray = summatoryColumns.map(x => (x > numItems/2) ? 1 : 0);
    const epsilonArray = summatoryColumns.map(x => (x > numItems/2) ? 0 : 1);
    const gamma = binaryArrayToInt(gammaArray);
    const epsilon = binaryArrayToInt(epsilonArray);

    return gamma * epsilon;
}

exports.lifeSupportRating = function (input) {
    const numItems = input.length;

    const matrix = input.map(x => parseBinary(x));

    function onesBitCriteria(x, y) {
        return x >= y ? 1 : 0
    }

    function cerosBitCriteria(x, y) {
        return x < y ? 1 : 0
    }

    function calculateRating(toFilter, bitCriteriaFunction, index) {
        const summatoryColumns = toFilter.reduce((a, b) => a.map((x, i) => x + b[i]));
        const bitCriteriaArray = summatoryColumns.map((x) => { return bitCriteriaFunction(x, toFilter.length/2) });

        var filteredArray = toFilter.filter((item) => { return (item[index] == bitCriteriaArray[index]) });
    
        if (filteredArray.length > 1) {
            return calculateRating(filteredArray, bitCriteriaFunction, index+1);
        }
        return binaryArrayToInt(filteredArray[0]);
    }
    
    var oxygenGeneratorRating = calculateRating(matrix, onesBitCriteria, 0);
    var co2ScrubberRating = calculateRating(matrix, cerosBitCriteria, 0);

    return oxygenGeneratorRating * co2ScrubberRating;
}