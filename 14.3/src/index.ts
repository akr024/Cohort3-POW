// API Pick

// type UserType = {
//     name: string,
//     age: number,
//     address: string,
//     ssn: string
// }

// type UserInfo = Pick<UserType, 'name' | 'age'>

// const user1: UserInfo = {
//     name: "user1name",
//     age: 29
// }

// Partial API

// type user = {
//     age: number,
//     address: {street: string, aptNo: number}
// }

// type OptionalUser = Partial<user> // now, all fields in user are optional

// const optUser: OptionalUser = {
//     age: 3
// }

// // below is not allowed:
// // const mandUser: user = {
// //     age: 44,
// // }

// Readonly API

type dataObj = {
    readonly name: string,
    readonly info: boolean
} // now, once an obj is initialised, name and info are unchangeable

const data: dataObj = {
    name: "someName",
    info: true
}

// OR

type dataObj2 = {
    name: string,
    info: boolean
}

const data2: Readonly<dataObj2> = {
    name: "someName",
    info: true
}

// data2.name = "someothername" // not allowed anymore, diff syntax
