const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function() {
	let i;
  let sum=0;
  for(i=0; i<arguments.length; i++){
    if(typeof arguments[i] === "object"){
      arguments[i].forEach(function(item) {
        sum+=item;
      })
    }else{
    sum+=arguments[i];
    }
  }
  return sum;
};

const multiply = function() {
    let i;
    let sum=1;
    for(i=0; i<arguments.length; i++){
      if(typeof arguments[i] === "object"){
        arguments[i].forEach(function(item) {
          sum*=item;
        })
      }else{      
      sum*=arguments[i];
      }
    }
    return sum;
};

const power = function(num1,num2) {
	return num1 ** num2;
};

const factorial = function() {
	if(arguments[0]==0){
    return 1;
  }else{
    let i;
    let sum=1;
    for(i=1; i<=arguments[0]; i++){
        sum*=i;
    }
    return sum;
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
