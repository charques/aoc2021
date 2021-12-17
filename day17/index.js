
function coordInside(target, x, y) {
    // target area: x=20..30, y=-10..-5
    // target area: x=282..314, y=-80..-45

    // IN
    if((x >= target.x1) && (x <= target.x2) && 
        (y <= target.y1) && (y >= target.y2)) {
        return 1;
    }
    // BEYOND
    if((x > target.x2) || (y < target.y2)) {
        return 2;
    }
    return 0;
}

function calc(target, vX, vY) {
    var result = [[0,0]];
    var cordCheck = null;
    var x = 0;
    var y = 0;
    var step = 0;
    do {
        var xx = ((vX-step) >= 0) ? vX-step : 0;
        x = x + xx;
        y = y + (vY-step);
        result.push([x,y]);
        cordCheck = coordInside(target, x, y);
        if(cordCheck > 0) break;
        step++;
    } while(true);
    if(cordCheck == 1) {
        // max High
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

function highestY(x1, x2, y1, y2, SIZE) {
    const target = {
        x1: x1,
        x2: x2,
        y1: y1,
        y2: y2
    };

    var r = null;
    var results = [];

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

module.exports = {
    highestY: highestY
};