function parseInput(input) {
    const myRegex = /\w+/g;
    return input.match(myRegex).map(x => parseInt(x));
}

function calcFuel(input, extended) {
    const values = parseInput(input);

    function compare( a, b ) {
        return ( a > b ) ? -1 : 1;
    }
      
    let ordered = values.sort( compare );

    let minors = [];

    ordered.forEach(baseElement => {
        let count = 0;
        if(baseElement == 5) {
            console.log("xx");
        }
        ordered.forEach(element => {
            var zz = element - baseElement;

            if(! extended) {
                count += Math.abs(zz);
            }
            else {
                count += sumatorio(Math.abs(zz));
            }
        });
        minors.push(count);
    });

    let shortedMinors = minors.sort( compare );

    return shortedMinors[shortedMinors.length-1];
}

function sumatorio (n) {
	var total = 0; 
	for (i=1; i<=n; i++) {
		total = total + i; 
	}
	return total; 
}

//1 + 2 + 3 + 4 + 5




module.exports = {
    calcFuel: calcFuel,
    sumatorio: sumatorio
};