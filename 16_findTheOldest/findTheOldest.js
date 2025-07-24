const findTheOldest = function (arr) {
    return arr
        .map((person) => {
            if (person.yearOfDeath === undefined) {
                person.yearOfDeath = new Date().getFullYear();
            }
            return person;
        })
        .sort((a, b) => {
            return b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth);
        })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
