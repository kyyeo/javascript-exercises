const repeatString = function(string, num) {
    let outText = "";
    let i;
    
    if(!Boolean(string)){
        return outText;
    }

    if(num==0){
        return outText;
    }else if(num<0) {
        return outText='ERROR';
    }else{
        for(i=1; i<=num; i++) {
            outText += string;
        }
    }

    return outText; 
};

// Do not edit below this line
module.exports = repeatString;
 