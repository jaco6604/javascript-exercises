const fibonacci = function(a) {
    a = Number(a);
    if(isNaN(a) || a < 0){
        return "OOPS";
    }

    if (a === 0){
        return 0;
    }
    if(a <= 2){
        return 1;
    }
    let prev = 1;
    let curr = 1;
for(let i = 3; i <= a; i++){
    let next = prev + curr;
    prev = curr;
    curr = next;
    
}

return curr;
};

// Do not edit below this line
module.exports = fibonacci;
