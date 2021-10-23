const sumAll = function() {
    //check arguments
    let n;
    for(n=0; n<arguments.length; n++){
        if(arguments[n] < 0){
            return 'ERROR';
        }else if(isNaN(arguments[n])){
            return 'ERROR';
        }else if(typeof arguments[n] === 'string'){
            return 'ERROR';
        }else{
            continue;
        }
    }
    
    let smaller;
    let larger;
    //determine the smaller and larger numbers
    if(arguments[0] > arguments[1]){
        larger=arguments[0];
        smaller=arguments[1];

    }else if(arguments[0] < arguments[1]){
        larger=arguments[1];
        smaller=arguments[0];

    }else{
        //both numbers must equal
        return arguments[0];
    }

    // console.log('smaller: ' + smaller);
    // console.log('larger: ' + larger);
    
    let sum=0;
    let i;
    //start summation from smaller
    for(i=smaller; i<=larger; i++){
        sum+=i;
        // console.log('sum: ' + sum);
    };
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
