
const HIT_TARGET = 1;
const OUT_MISS_TARGET = 2;
const OUT_FAR_FROM_TARGET = 0;

function coordInside(target, x, y) {
    // IN
    if((x >= target.x1) && (x <= target.x2) && 
        (y <= target.y1) && (y >= target.y2)) {
        return HIT_TARGET;
    }
    // BEYOND
    if((x > target.x2) || (y < target.y2)) {
        return OUT_MISS_TARGET;
    }
    return OUT_FAR_FROM_TARGET;
}

function calc(target, vX, vY) {
    var result = [[0,0]];
    var cordCheck = null;
    var x = 0;
    var y = 0;
    var step = 0;
    var xInc = 0;
    var yInc = 0;
    do {
        xInc = ((vX-step) >= 0) ? vX-step : 0;
        yInc = vY-step;
        x = x + xInc;
        y = y + yInc;
        result.push([x,y]);
        cordCheck = coordInside(target, x, y);
        if(cordCheck > 0) break;
        step++;
    } while(true);

    if(cordCheck == HIT_TARGET) {
        // calc max high
        var max = result.reduce((prev, curr) => {
            return (curr[1] > prev) ? curr[1] : prev;
        }, 0);
        return {
            result: result,
            maxHigh: max
        };
    }
    return null;
}

function highestY(x1, x2, y1, y2) {
    const target = {
        x1: x1,
        x2: x2,
        y1: y1,
        y2: y2
    };

    var r = null;
    var results = [];

    const SIZE = 200;

    for(var vY = 0; vY < SIZE; vY++) {
        for(var vX = 0; vX < SIZE; vX++) {
            r = calc(target, vX, vY);
            if(r != null) {
                results.push(r);
            }
        }
    }
    var max = results.reduce((prev, curr) => {
        return (curr.maxHigh > prev) ? curr.maxHigh : prev;
    }, 0);

    return max;
}

function numHits(x1, x2, y1, y2) {
    const target = {
        x1: x1,
        x2: x2,
        y1: y1,
        y2: y2
    };

    var r = null;
    var results = [];

    var INIT_Y = -250;
    var SIZE_Y = 500;
    var SIZE_X = 700;

    for(var vY = INIT_Y; vY < SIZE_Y; vY++) {
        for(var vX = 0; vX < SIZE_X; vX++) {
            r = calc(target, vX, vY);
            if(r != null) {
                results.push(r);
            }
        }
    }
    
    return results.length;
}

module.exports = {
    highestY: highestY,
    numHits: numHits
};