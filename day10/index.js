
const OPEN  = "([<{";
const CLOSE = ")]>}";

function isEmpty(str) {
    return str == null || str == "";
}

function isOpen(ch) {
    return OPEN.indexOf(ch) != -1;
}
function isClose(ch) {
    return CLOSE.indexOf(ch) != -1;
}
function isMatching(chOpen, chClose) {
    return OPEN.indexOf(chOpen) == CLOSE.indexOf(chClose);
}

/*function isBalanced(input, stack) {
    if(isEmpty(input)) {
        return isEmpty(stack);
    }
    else if(isOpen(input.charAt(0))) {
        return isBalanced(input.substring(1), input.charAt(0) + stack);
    }
    else if(isClose(input.charAt(0))) {
        let notEmpty = !isEmpty(stack);
        let match = isMatching(stack.charAt(0), input.charAt(0));
        
        return notEmpty && match && isBalanced(input.substring(1), stack.substring(1));
    }
    else {
        return isBalanced(input.substring(1), stack);
    }
}*/

/*function isBalanced(input, stack) {
    if(isEmpty(input)) {
        return {r: isEmpty(stack), v: ""};
    }
    else if(isOpen(input.charAt(0))) {
        return {r: isBalanced(input.substring(1), input.charAt(0) + stack), v: ""};
    }
    else if(isClose(input.charAt(0))) {
        let notEmpty = !isEmpty(stack);
        let match = isMatching(stack.charAt(0), input.charAt(0));
        
        if(!match) {
            return {r: notEmpty && match && isBalanced(input.substring(1), stack.substring(1)), v: input.charAt(0)};
        }
        else {
            return {r: notEmpty && match && isBalanced(input.substring(1), stack.substring(1)), v: ""};
        }
    }
    else {
        return {r: isBalanced(input.substring(1), stack), v: ""};
    }
}*/

function isBalanced(input, stack) {
    if(isEmpty(input)) {
        //return isEmpty(stack);
        return 0;
    }
    else if(isOpen(input.charAt(0))) {
        return isBalanced(input.substring(1), input.charAt(0) + stack);
    }
    else if(isClose(input.charAt(0))) {
        let notEmpty = !isEmpty(stack);
        let match = isMatching(stack.charAt(0), input.charAt(0));
        
        if(!notEmpty && match) {
            return 0;
        }
        else if(notEmpty && !match) {
            return [3, 57, 1197, 25137][CLOSE.indexOf(input.charAt(0))];
        }
        else {
            return notEmpty && match && isBalanced(input.substring(1), stack.substring(1));
        }
    }
    else {
        return isBalanced(input.substring(1), stack);
    }
}

function findFirstIlegalCharacter(input) {
    let sum = 0;
    input.forEach(element => {
        var balanced = isBalanced(element, "");
        //console.log(balanced);
        if(balanced != true && balanced != false) {
            sum += balanced;
        }
    });
    return sum;
}

module.exports = {
    findFirstIlegalCharacter: findFirstIlegalCharacter
};