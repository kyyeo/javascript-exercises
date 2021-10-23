const removeFromArray = function(/*array*/thisArray) {
    
    //check function arguments
    if(thisArray===undefined){
        return thisArray;
    };

    //loop through all arguments, other than array
    let i;
    for(i=1; i<arguments.length; i++){
        //loop and remove all elements
        let loop=true;
        while(loop){
            let findIndex;
            findIndex = thisArray.lastIndexOf(arguments[i]);
            
            //stop while loop if not found, else remove the element
            if(findIndex===-1){
                loop=false;
            }else{
                thisArray.splice(findIndex,1);
            }
        }
    }
    return thisArray;
};

// Do not edit below this line
module.exports = removeFromArray;
