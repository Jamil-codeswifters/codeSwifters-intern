"use strict";
const identityOne = (args) => {
    return args;
};
// console.log(identityOne(123));
const identityTwo = (args) => {
    return args;
};
// console.log(identityTwo('jamil afzal'));
// console.log(identityTwo(12344));
const identityThree = (args) => {
    return args;
};
// console.log(identityThree('jamil'))
// console.log(identityThree(123))
// console.log(identityThree(true))
const identityFour = (agrs) => {
    return agrs;
};
const identityFive = (args) => {
    return args;
};
const identitySix = (args) => {
    // console.log(args.length);
    return args;
};
// console.log(identitySix('jamil'));
const identitySeven = (args) => {
    console.log(args.length);
    return args;
};
// console.log(identitySeven([1,2,34,5,6]));
const identityEight = (args) => {
    return args;
};
const foo = (arg1, arg2) => {
    return {
        arg1,
        arg2,
    };
};
// console.log(foo(12, 'jamil'));
// console.log(12,12);
const foo1 = (a, b) => {
    return { a, b };
};
// console.log(foo1('smit', {
//     connection: 'nest',
//     port: 3030,
//     localhost:'abbnn'
// }));
// generic in classes
class Saleable {
    constructor() {
        this.card = [];
    }
    addtoCart(prod) {
        this.card.push(prod);
    }
}
const class1 = new Saleable();
class1.addtoCart('12');
class1.addtoCart('122');
class1.addtoCart('34');
console.log(class1);
