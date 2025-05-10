const identityOne = (args: number | boolean): number | boolean => {
  return args
}
// console.log(identityOne(123));

const identityTwo = (args: any): any => {
  return args
}

// console.log(identityTwo('jamil afzal'));
// console.log(identityTwo(12344));

const identityThree = <Type>(args: Type): Type => {
  return args
}
// console.log(identityThree('jamil'))
// console.log(identityThree(123))
// console.log(identityThree(true))

const identityFour = <T>(agrs: T): T => {
  return agrs
}

const identityFive = <K>(args: K): K => {
  return args
}

const identitySix = <L>(args: L): L => {
  // console.log(args.length);
  return args
}
// console.log(identitySix('jamil'));

const identitySeven = <M>(args: M[]): M[] => {
  console.log(args.length)
  return args
}

// console.log(identitySeven([1,2,34,5,6]));

const identityEight = <N>(args: Array<N>): Array<N> => {
  return args
}

const foo = <A, B extends string>(arg1: A, arg2: B): Object => {
  return {
    arg1,
    arg2,
  }
}

// console.log(foo(12, 'jamil'));
// console.log(12,12);

const foo1 = <B, C extends Database>(a: B, b: C): Object => {
  return { a, b }
}

interface Database {
  connection: string
  port: number
  localhost: string
}

// console.log(foo1('smit', {
//     connection: 'nest',
//     port: 3030,
//     localhost:'abbnn'
// }));

// generic in classes

class Saleable<T> {
  public card: T[] = []
  addtoCart(prod: T) {
    this.card.push(prod)
  }
}

const class1 = new Saleable<string>()
class1.addtoCart('12')
class1.addtoCart('122')
class1.addtoCart('34')

console.log(class1)
