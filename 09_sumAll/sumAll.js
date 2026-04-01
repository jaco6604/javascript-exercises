const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') {
        return "ERROR";
    }
    let sum = 0;
    let start = (a < b) ? a : b;
    let end = (a < b) ? b : a;
    
    for(i = start; i <= end; i++){
        sum += i;
    }

    return sum;

};


// Do not edit below this line
module.exports = sumAll;
