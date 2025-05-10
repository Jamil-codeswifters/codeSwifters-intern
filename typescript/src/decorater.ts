const logger = (target: Function) => {
  console.log('user is logging')
}
// @logger

class User {
  name: string = 'jamil'
  age: number = 30
  constructor() {
    console.log('user class constructor is called')
  }
}

function sealed(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

@sealed
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
}

let c = new Greeter('Hello, world!')
