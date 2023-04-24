const reverseString = function(word) {
    let tempWord = "";
    for(let i = word.length; i > 0; i--){
        tempWord += word.charAt(i - 1);
    }
    return tempWord;
};

// Do not edit below this line
module.exports = reverseString;
