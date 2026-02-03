// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };

// console.log(toArray(1,2,3,4)); // without rest operator o/p is - [ 1, 2, 3 ]

// using rest operator
const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3,4));