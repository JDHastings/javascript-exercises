const repeatString = function(word, times) {
    if(times < 0){
        return "ERROR";
    }
    let tempWord = "";
    for(let i = 0; i < times; i++){
        tempWord += word;
    }
    return tempWord;
};

// Do not edit below this line
module.exports = repeatString;
