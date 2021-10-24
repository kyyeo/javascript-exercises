const fibonacci = function(num) {
    let position;
    if(num==1 || num==2){
        return 1;
    }else if(num < 0) {
        return 'OOPS';
    }else if(typeof num === 'string'){
        position = parseInt(num);
    }else{
        position = num;
    };
    
    let n=1;
    let m=1;
    let result=0;
    let i=3;
    let loop = true;
    while(loop){
        result=n+m;
        if(position==i){
            loop=false;
        }else{
            n=m;
            m=result;
            i++;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
