const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let num = 0;
  for(let i = 0; i < arr.length; i++){
    num += arr[i];
  }
  return num;
};

const multiply = function(arr) {
  let num = arr[0];
  for(let i = 1; i < arr.length; i++){
    num *= arr[i];
  }
  return num;
};

const power = function(num, pow) {
	tempNum = num;
  for(let i = 1; i < pow; i++){
    tempNum *= num;
  }
  return tempNum;
};

const factorial = function(num) {
	if(num == 0){
    return 1;
  }else{
    return num * factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
