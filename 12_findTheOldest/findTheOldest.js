const findTheOldest = function(people) {
    let oldest = people[0];
    for(let i = 1; i < people.length; i++){
        if(age(people[i]) > age(oldest)){
            oldest = people[i];
        }
    }
    return oldest;
};

function age(person){
    if(person.yearOfDeath){
        return person.yearOfDeath - person.yearOfBirth;
    }
    return new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
