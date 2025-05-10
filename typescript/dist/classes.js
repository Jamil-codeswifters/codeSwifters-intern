"use strict";
// class Information {
//   name: string
//   email: string
//   password: string = ''
//   constructor(name: string, email: string) {
//     this.name = name
//     this.email = email
//   }
// }
// const userinfo = new Information('jamil', 'jamil@gmail.com')
class SuperHero {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    get heroEmail() {
        //   getter is assocer the value in the class
        return this.email;
    }
    set setHeroEmail(email) {
        this.email = email;
    }
}
//   const hero1 = new SuperHero('jamil', 'jamil@gmail.com')
//   console.log(hero1.email)
//   console.log((hero1.setHeroEmail = 'j@j.com'))
class UserName {
    constructor(name, email) {
        this._name = 'jamil';
        this._email = 'j@j.com';
        this._password = '1122';
        this.userName = 'coder..';
        this._name = name;
        this._email = email;
    }
    get userData() {
        return {
            userName: this.userName,
            _email: this._email,
            _password: this._password,
        };
    }
    set passwordSet(_password) {
        this._password = _password;
    }
}
const datas = new UserName('jamil', 'jamil@gmail.com');
console.log((datas.passwordSet = '112233'));
console.log(datas.userData);
class SabUserName extends UserName {
    constructor(_name, _email) {
        super(_name, _email);
    }
}
const users = new SabUserName('jamil', 'admin');
class Instagram {
    constructor(burst, cemeraMode, filter, short) {
        this.burst = burst;
        this.cemeraMode = cemeraMode;
        this.filter = filter;
        this.short = short;
        this.createVideo = () => {
            console.log('createVideo');
        };
    }
    getDetails() {
        return `Burst: ${this.burst}, Camera Mode: ${this.cemeraMode}, Filter: ${this.filter}`;
    }
}
class Youtube {
    constructor(burst, filter, cemeraMode, vidoesUrl, liveStream) {
        this.burst = burst;
        this.filter = filter;
        this.cemeraMode = cemeraMode;
        this.vidoesUrl = vidoesUrl;
        this.liveStream = liveStream;
    }
}
