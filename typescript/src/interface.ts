interface UserInfo {
  name: string
  email: string
  readonly password: string
  google_id: string
  isActive: boolean
  startTrail?: boolean //this fields is optional
  [propName: string]: any
}

interface UserInfo {
  githubToken: string
  facebookId: string
}

interface AdminInfo extends UserInfo {
  adminId: boolean
}

const userData: UserInfo = {
  name: 'jamil afzal',
  email: 'jamil@gmail.com',
  password: '1122',
  google_id: '1234',
  isActive: true,
  startTrail: true,
  githubToken: 'git12',
  facebookId: 'face123',
  age: 12,
}

const adminInfo: AdminInfo = {
  adminId: true,
  name: 'admin',
  email: 'admin@gmail.com',
  password: '123',
  google_id: '111',
  isActive: true,
  githubToken: '12',
  facebookId: '11',
}

// adminInfo.password="12344"
// console.log(userData);

interface SearchFun {
  (source: string, subString: string): boolean
}

let mySearchFun: SearchFun

mySearchFun = function (source: string, subString: string): boolean {
  let result = source.search(subString)
  return result > -1
}

// console.log(mySearchFun('jamil',"i"));

interface Point {
  x: number
}

// interface Point{ y: number }

// const p: Point = { x: 0, y: 0 }
// console.log(p);

// interface Aminal {
//   name: string
// }
// interface Dog extends Aminal {
//   brak(): void
// }

// type Aminal = { name: string }
// type Dog = Aminal & { brak(): void }

type ID = number | string
type Coordinates = [number, number]
type Callback = (err: Error | null, data?: string) => void

// interface Callbacks=(err: Error | null, data?;string)=>void
// interface Info{
// //     age:number|string
// // }

type Direction = 'up' | 'left' | 'down' | 'right'


// function foo<T>(arg: T): T{
//     return arg
// }
