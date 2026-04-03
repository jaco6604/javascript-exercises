const findTheOldest = function(people) {
    
    let oldest = people[0];
    for(let i = 0; i < people.length; i++){
        const person = people[i];
        const death = person.yearOfDeath || new Date().getFullYear();
        const oldestDeath = oldest.yearOfDeath || new Date().getFullYear();
        const oldestLifeSpan = oldestDeath - oldest.yearOfBirth;

        const lifespan = death - person.yearOfBirth;
        if(lifespan > oldestLifeSpan){
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
