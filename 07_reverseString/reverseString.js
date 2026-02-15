const reverseString = function(str) {
let result = str.split('');
result.reverse();
result = result.join('');

return result;
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
