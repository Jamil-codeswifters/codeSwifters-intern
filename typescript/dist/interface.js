"use strict";
const userData = {
    name: 'jamil afzal',
    email: 'jamil@gmail.com',
    password: '1122',
    google_id: '1234',
    isActive: true,
    startTrail: true,
    githubToken: 'git12',
    facebookId: 'face123',
    age: 12,
};
const adminInfo = {
    adminId: true,
    name: 'admin',
    email: 'admin@gmail.com',
    password: '123',
    google_id: '111',
    isActive: true,
    githubToken: '12',
    facebookId: '11',
};
let mySearchFun;
mySearchFun = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
// function foo<T>(arg: T): T{
//     return arg
// }
