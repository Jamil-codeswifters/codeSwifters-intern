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
    constructor(public name: string, private email: string) {}
    public get heroEmail() {
      //   getter is assocer the value in the class
      return this.email
    }
    public set setHeroEmail(email: string) {
      this.email = email
    }
  }
  
//   const hero1 = new SuperHero('jamil', 'jamil@gmail.com')
//   console.log(hero1.email)
  
//   console.log((hero1.setHeroEmail = 'j@j.com'))
  
  class UserName {
    private _name: string = 'jamil'
    protected _email: string = 'j@j.com'
    protected _password: string = '1122'
    public userName: string = 'coder..'
  
    constructor(name: string, email: string) {
      this._name = name
        this._email = email
    }
  
    get userData(): { userName: string; _email: string; _password: string } {
      return {
        userName: this.userName,
        _email: this._email,
        _password: this._password,
      }
    }
    set passwordSet(_password: string) {
      this._password = _password
    }
  }
  
  const datas = new UserName('jamil', 'jamil@gmail.com')
  console.log((datas.passwordSet = '112233'))
  console.log(datas.userData)
  
  class SabUserName extends UserName {
    constructor(_name: string, _email: string) {
      super(_name, _email)
    }
  }
  
  const users = new SabUserName('jamil', 'admin')
  // console.log(users.userData._name
  // )
  
  interface TakePicture {
    burst: string
    cemeraMode: string
    filter: string
  }
  
  interface Story {
    short: string
    createVideo: () => void
  }
  interface Short {
    vidoesUrl: string
  }
  
  class Instagram implements TakePicture, Story {
    constructor(
      public burst: string,
      public cemeraMode: string,
      public filter: string,
      public short: string
    ) {}
    public createVideo: () => void = () => {
      console.log('createVideo')
    }
    getDetails(): string {
      return `Burst: ${this.burst}, Camera Mode: ${this.cemeraMode}, Filter: ${this.filter}`
    }
  }
  
  class Youtube implements TakePicture, Short {
    constructor(
      public burst: string,
      public filter: string,
      public cemeraMode: string,
      public vidoesUrl: string,
      public liveStream: string
    ) {}
  }