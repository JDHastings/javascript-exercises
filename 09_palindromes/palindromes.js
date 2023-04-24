const palindromes = function (word) {
    word = removeFromArray(word.toLowerCase(), ",", ".", "!", " ")
    let drow = reverseString(word);
    for(let i = 0; i < word.length; i++){
        if(!(word[i] == drow[i])){
            return false;
        }
    }
    return true;
};

const reverseString = function(word) {
    let tempWord = "";
    for(let i = word.length; i > 0; i--){
        tempWord += word[i - 1];
    }
    return tempWord;
};

const removeFromArray = function(arr) {
    let tempArr = [];
    let arrIndex = 0;
    let addToArray = true;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arguments.length; j++){
            if(arr[i] === arguments[j]){
                addToArray = false;
            }
        }
        if(addToArray){
            tempArr[arrIndex] = arr[i];
            arrIndex++;
        }
        addToArray = true;
    }
    return tempArr;
};

// Do not edit below this line
module.exports = palindromes;
