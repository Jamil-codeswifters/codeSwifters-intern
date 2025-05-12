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

// let c = new Greeter('Hello, world!')



function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with`, args);
    return original.apply(this, args);
  };
}

class MathService {
  @log
  add(a: number, b: number) {
    return a + b;
  }
}

const ms = new MathService();
ms.add(1, 2); // Logs: Calling add with [1, 2]

