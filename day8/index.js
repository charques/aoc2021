var sortAlphabets = function(text) {
    return text.split('').sort((a, b) => a.localeCompare(b)).join('');
};

function parseInput(rawInput) {
    const myRegex = /\w+/g;
    let parsedLines = [];
    rawInput.forEach(item => {
        var rawLineArray1 = item.match(myRegex);
        var rawLineArray2 = rawLineArray1.splice(0,10);
        var rawSignalPatterns = [];
        rawLineArray2.forEach((e, index) => {
            rawSignalPatterns[index] = sortAlphabets(e).split("");
        });
        var rawOutputValues = [];
        rawLineArray1.forEach((e, index) => {
            rawOutputValues[index] = sortAlphabets(e).split("");
        });
        parsedLines.push({
            rawSignalPatterns: rawSignalPatterns, 
            rawOutputValues: rawOutputValues
        });
    });
    return parsedLines;
}

function compare(a, b) {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
}

function difference(a, b) {
    return a.filter(x => !b.includes(x));
}

function add(a, b) {
    return a.concat(b);
}

function detectSignalPatternsPerLine(line) {
    const rawSignalPatterns = line.rawSignalPatterns;
    let ordered = rawSignalPatterns.sort((a, b) => ( a.length > b.length ) ? 1 : -1);

    let result = [];

    var one = ordered[0];
    var four = ordered[2];
    var seven = ordered[1];
    var eight = ordered[9];

    var aaaa = difference(seven, one);

    var t1 = difference(ordered[3], add(four, aaaa));
    var t2 = difference(ordered[4], add(four, aaaa));
    var t3 = difference(ordered[5], add(four, aaaa));
    var two = [];
    var gggg = [];
    if (t1.length == 2) {
        two = ordered[3];
        gggg = t2;
    }
    else if (t2.length == 2) {
        two = ordered[4];
        gggg = t1;
    }
    else if (t3.length == 2) {
        two = ordered[5];
        gggg = t2;
    }
    
    var bbbb = difference(eight, add(two, one));
    var nine = add(add(four, aaaa), gggg);
    var eeee = difference(eight, nine);
    var three = add(add(difference(four, bbbb), aaaa), gggg);
    var ffff = difference(three, two);
    var cccc = difference(one, ffff);
    var six = difference(eight, cccc);
    var five = difference(six, eeee);
    var dddd = difference(difference(difference(four, bbbb), cccc), ffff);
    var cero = difference(eight, dddd);

    result[0] = cero.sort(compare);
    result[1] = one.sort(compare);
    result[2] = two.sort(compare);
    result[3] = three.sort(compare);
    result[4] = four.sort(compare);
    result[5] = five.sort(compare);
    result[6] = six.sort(compare);
    result[7] = seven.sort(compare);
    result[8] = eight.sort(compare);
    result[9] = nine.sort(compare);

    return result;
}

function countFourDigitsOutput1(line, calculatedSignalPatterns) {
    const rawOutputValues = line.rawOutputValues;

    var result = [];
    rawOutputValues.forEach((vArray1) => {
        calculatedSignalPatterns.forEach((vArray2, index) => {
            if(vArray1.join("") == vArray2.join("")) {
                result[index] = (result[index] != null) ? result[index] + 1 : 1;
            }
        });
    });
    return result;
}

function countFourDigitsOutput2(line, calculatedSignalPatterns) {
    const rawOutputValues = line.rawOutputValues;

    var result = [];
    rawOutputValues.forEach((vArray1) => {
        calculatedSignalPatterns.forEach((vArray2, index) => {
            if(vArray1.join("") == vArray2.join("")) {
                result.push(index);
            }
        });
    });
    return parseInt(result.join(""));
}

function prepareBaseOutput(digitsToCount) {
    var r = [];
    digitsToCount.forEach((element) => {
        r[element] = 0;
    });
    return r;
}

function addToOutput(outputArray, lineCount) {
    lineCount.forEach((element, index) => {
        if(outputArray[index] != null) {
            outputArray[index] += element;
        }
    });
    return outputArray;
}

function countTimesDigit1(input, digitsToCount) {
    let lines = parseInput(input);
    let output = prepareBaseOutput(digitsToCount);

    lines.forEach(line => {
        var calculatedSignalPatterns = detectSignalPatternsPerLine(line);
        var lineCount = countFourDigitsOutput1(line, calculatedSignalPatterns);
        output = addToOutput(output, lineCount);
    });

    return output.reduce((previous, current) => previous + current);
}

function countTimesDigit2(input) {
    let lines = parseInput(input);

    var lineCount = 0;
    lines.forEach(line => {
        var calculatedSignalPatterns = detectSignalPatternsPerLine(line);
        lineCount += countFourDigitsOutput2(line, calculatedSignalPatterns);
    });

    return lineCount;
}


module.exports = {
    countTimesDigit1: countTimesDigit1,
    countTimesDigit2: countTimesDigit2
};