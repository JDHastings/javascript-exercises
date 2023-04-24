const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }
    pastNum = 1;
    currentNum = 1;
    tempNum = 0;
    for(let i = 2; i < Number(num); i++){
        tempNum = currentNum;
        currentNum = currentNum + pastNum;
        pastNum = tempNum;
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
