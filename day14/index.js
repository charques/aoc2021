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
    var sb1 = "";
    var sb2 = "";
    var v = "";

    for(var j = 0; j < loops; j++) {
        output = "";
        for(var i = 0; i < template.length-1; i++) {
            sb1 = template.substring(i,i+1);
            sb2 = template.substring(i,i+2);
            v = patterns[sb2];
            output += (v != null) ? sb1 + v : sb1;
        }
        output += template.substring(template.length-1,template.length);
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

function getTemplateAndPatterns2(input) {
    let templatePatterns = {};
    let patterns = {};

    for(var j = 0; j < input[0].length-1; j++) {
        var sb2 = input[0].substring(j,j+2);
        templatePatterns[sb2] = (templatePatterns[sb2]) ? templatePatterns[sb2] + 1 : 1; 
    }
 
    for(var i= 2; i < input.length; i++) {
        if(input[i] == "") break;
        var patternArray = input[i].split(" -> ");
        patterns[patternArray[0]] = patternArray[1];
    }
    return {templatePatterns: templatePatterns, patterns: patterns};
}

function calc2(input, loops) {
    let { templatePatterns, patterns } = getTemplateAndPatterns2(input);

    var v = "";
    let newPatterns = {};
    for(var j = 0; j < loops; j++) {
        newPatterns = {};
        for (const item in templatePatterns) {
            v = patterns[item];
            var newPair1 = item.substring(0,1) + v;
            newPatterns[newPair1] = (newPatterns[newPair1]) ? newPatterns[newPair1] + templatePatterns[item] : templatePatterns[item]; 
            var newPair2 = v + item.substring(1,2);
            newPatterns[newPair2] = (newPatterns[newPair2]) ? newPatterns[newPair2] + templatePatterns[item] : templatePatterns[item]; 
        }
        templatePatterns = newPatterns;
    }

    const counts = {};
    var max = 0;
    var min = 99999999999999;
    for (const pattern in templatePatterns) {
        var a = pattern.substring(0,1);
        var b = pattern.substring(1,2);
        counts[a] = (counts[a]) ? counts[a] + templatePatterns[pattern] : templatePatterns[pattern]; 
        counts[b] = (counts[b]) ? counts[b] + templatePatterns[pattern] : templatePatterns[pattern];
    }
    for (const id in counts) {
        max = (counts[id] > max) ? counts[id] : max;
        min = (counts[id] < min) ? counts[id] : min;
    }
    return Math.round((max - min)/2);
}

module.exports = {
    calc: calc,
    calc2: calc2,
};