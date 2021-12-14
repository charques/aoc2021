function getTemplateAndPatterns(input) {
    let template = input[0];
    let patterns = [];
 
    for(var i= 2; i < input.length; i++) {
        if(input[i] == "") break;
        var patternArray = input[i].split(" -> ");
        patterns[patternArray[0]] = patternArray[1];
    }
    return {template: template, patterns: patterns};
}


function calc(input, loops) {
    let { template, patterns} = getTemplateAndPatterns(input);

    var output = "";

    for(var j = 0; j < loops; j++) {
        output = "";
        template = template.split("");
        for(var i = 0; i < template.length-1; i++) {
            var v = patterns[template[i]+template[i+1]];
            if(v != null) {
                output += template[i] + v;
            }
            else {
                output += template[i];
            }
        }
        output += template[template.length-1];
        //console.log(output);
        template = output;
    }

    const counts = {};
    var max = 0;
    var min = 999999;
    template = template.split("");
    for (const num of template) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    for (const id in counts) {
        max = (counts[id] > max) ? counts[id] : max;
        min = (counts[id] < min) ? counts[id] : min;
    }
    return max - min;
}

module.exports = {
    calc: calc
};