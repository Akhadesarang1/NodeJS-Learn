const person = {
    name : 'sarang',
    age : 23,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
const printName = ({name}) => {
    console.log(name);
};
// const printName = (personData) => {
//     console.log(personData.name);
//     console.log(personData.age);
// }

printName(person);

const{name, age} = person;
console.log(name, age); // o/p sarang 23

const hobbies = ['Gym', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); // o/p - Gym Cooking 