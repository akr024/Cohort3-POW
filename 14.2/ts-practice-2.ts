// interface RandomType {
//     age?: number, // optional field
//     name: string
// }

// const user: RandomType = {
//     name: "random name",
//     age: 30
// }

// // also works without age as age is optional because of ? at the end
// const userWithoutAge: RandomType = {
//     name: "random name"
// }

type UserType = {
    name: string,
    status: string
}


type AdminType = {
    name: string,
    powerLevel: string
}

function sayHello (user: UserType | AdminType): string {
    return "welcome " + user.name   
}

console.log(sayHello({name: "a name", status: "junior employee"}));
