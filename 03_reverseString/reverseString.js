const reverseString = function(str) {
    let i;
    let newStr='';
    for(i=str.length; i>-1;i--){
        newStr+= str.charAt(i);
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
