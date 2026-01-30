// const person = {
//     name : 'sarang',
//     age : 23,
// };

// console.log(person);

const person = {
    name : 'sarang',
    age : 23,
    greet() { //we removed arrow function because this keyword refers to object(name,age) calling current function(greet())
        console.log('Hi, I am ' + this.name);
    }
};

person.greet(); 