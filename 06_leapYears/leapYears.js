const leapYears = function(year) {
    if(year%100===0 && year%400===0){
        //divisible by 100 unless 400
        return true;
    }else if(year%100===0){
        return false;
    }
    else if(year%4===0){
        //divisible by 4
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
