const palindromes = function () {
    //remove punctuations, including spaces
    let s = '';
    s = arguments[0];
    console.log(s);
    s = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    s = s.replace(/\s/g, "");

    //set s to toLowerCase()
    s = s.toLowerCase()
    console.log("s: " + s);

    //create c which is reversed order
    let i;
    let c='';
    for(i=s.length; i>=0; i--){
        c+=s.charAt(i);
    }
    console.log("c: " + c);

    //compare s and c
    for(i=0; i<s.length; i++){
        if(s.charAt(i) == c.charAt(i)){
            continue;
        }else{
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
