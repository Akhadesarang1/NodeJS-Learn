var name = 'sarang';
var age = 23;
var hasHobbies = 'Gym';

function summarizeUser(userName, userAge, userHasHobby){
    return(
        'Name is ' +
        userName +
        ',age is ' +
        userAge +
        'and the user has hobbies: ' +
        userHasHobby
    );
}

console.log(summarizeUser(name,age,hasHobbies));

// var is outdated