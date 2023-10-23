const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(array) {
  let sum=0;
  for(let i=0;i<array.length;i++){
    sum+=array[i];
  }
return sum;
	
};

const multiply = function(array) {
  let multiply=1;
  for(let i=0;i<array.length;i++){
    multiply*=array[i];
  }
  return multiply
};

const power = function(num,power) {
  numPower = 1;
	for(i=0;i<power;i++){
    numPower*=num;
  }
  return numPower
};

const factorial = function(num) {
  let fact = num;

  if(num ==0){
    return 1;
  }
  for(i=num-1;i>1;i--){
    fact *= i;
    console.log("i "+i+" "+fact+" num "+num)
  }

	return fact;
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
