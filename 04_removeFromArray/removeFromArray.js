const removeFromArray = function(arr, num) {
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

//console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
