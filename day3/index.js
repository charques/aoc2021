function parseBinary(binaryString) {
    return (binaryString.split("")).map(x => parseInt(x));
}

exports.powerConsumption = function (input) {
    const numBits = input[0].length
    var addition = Array(numBits).fill(0);

    const matrix = input.map(x => parseBinary(x));

    const reducer = (accumulator, item) => {
        return accumulator + item;
    };

    for(var i = 0; i < matrix.length ; i++) {
        for(var j = 0; j < matrix[i].length ; j++) {
            addition[j] = addition[j] + matrix[i][j];
        }
    }

    const gammaArray = addition.map(x => (x > i/2) ? 1 : 0);
    const epsilonArray = addition.map(x => (x > i/2) ? 0 : 1);
    const gamma = parseInt(gammaArray.join(''), 2);
    const epsilon = parseInt(epsilonArray.join(''), 2);

    return gamma * epsilon;
}