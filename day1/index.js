exports.sonarSimpleIncrements = function (report) {
    var increment = 0;
    for(var i = 1; i < report.length ; i++) {
        if(report[i] > report[i-1]) {
            increment++;
        }
     }
    return increment;
};

exports.sonarSlidingIncrements = function (report) {
    var increment = 0;
    for(var i = 2; i < report.length-1; i++) {
        var a1 = report[i-2] + report[i-1] + report[i];
        var a2 = report[i-1] + report[i] + report[i+1];
        if(a2 > a1) {
            increment++;
        }
     }
    return increment;
};