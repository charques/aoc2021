function parseBinary(binaryString) {
    return (binaryString.split("")).map(x => parseInt(x));
}

exports.powerConsumption = function (input) {
    const numItems = input.length;

    const matrix = input.map(x => parseBinary(x));
    var addition = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

    const gammaArray = addition.map(x => (x > numItems/2) ? 1 : 0);
    const epsilonArray = addition.map(x => (x > numItems/2) ? 0 : 1);
    const gamma = parseInt(gammaArray.join(''), 2);
    const epsilon = parseInt(epsilonArray.join(''), 2);

    return gamma * epsilon;
}

exports.lifeSupportRating = function (input) {

}