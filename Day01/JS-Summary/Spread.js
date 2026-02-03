// const hobbies = ['Gym', 'Cooking'];
// // hobbies.push('Programming');
// // const coppiedArray = hobbies.slice(); //slice() it simply copies an array
// const coppiedArray = [...hobbies];
// console.log(coppiedArray);

const person = {
    name : 'sarang',
    age : 23,
    greet() { 
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);