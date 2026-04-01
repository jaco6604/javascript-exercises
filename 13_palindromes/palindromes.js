const palindromes = function (str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  for(let i = 0; i < cleanStr.length / 2; i++){
    if(cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]){
        return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
