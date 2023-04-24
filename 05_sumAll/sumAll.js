const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || typeof(num1) != typeof(0) || typeof(num2) != typeof(0)){
        return "ERROR";
    }
    tempNum = 0;
    if(num1 < num2){
        for(let i = num1; i <= num2; i++){
            tempNum += i;
        }
    }else{
        for(let i = num2; i <= num1; i++){
            tempNum += i;
        }
    }
    
    return tempNum;
};

// Do not edit below this line
module.exports = sumAll;
