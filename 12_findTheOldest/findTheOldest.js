const findTheOldest = function(people) {
    //sort the array from oldest to youngest
    const sorted = people.sort(function(a, b){
        let d = new Date();
        let aAge
        let bAge

        //compute Person A's age
        if(Boolean(a.yearOfDeath)){
            aAge = a.yearOfDeath - a.yearOfBirth
        }else{
            aAge = d.getFullYear() - a.yearOfBirth
        }
// console.log("a's Age: " + aAge);

        //compute Person B's age
        if(Boolean(b.yearOfDeath)){
            bAge = b.yearOfDeath - b.yearOfBirth
        }else{
            bAge = d.getFullYear() - b.yearOfBirth
        }
// console.log("b's Age: " + bAge);

        //compare age and bump up the elder person
        if(aAge > bAge){
            return -1;
        }else{
            return 1;
        };
    });

    //first record is oldest
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
