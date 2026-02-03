const name = 'sarang'; // cant assign new name due to const
let age = 23; // can assign new age due to let
const hasHobbies = 'Gym'; // cant assign new hobby due to const

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