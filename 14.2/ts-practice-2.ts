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

// type UserType = {
//     name: string,
//     status: string
// }


// type AdminType = {
//     name: string,
//     powerLevel: string
// }

// function sayHello (user: UserType | AdminType): string {
//     return "welcome " + user.name   
// }

// console.log(sayHello({name: "a name", status: "junior employee"}));

type User = {
    name: string,
    age: number
}

const user1: User = {
    name: "user1",
    age: 17
}

const user2: User = {
    name: "user2",
    age: 39
}


const users = [user1, user2]

function legalUsers(users: User[]){
    const legalUser: User[] = [];

    for(let i = 0; i < users.length; i++){
        if(users[i].age >= 18){
            legalUser.push(users[i]);
        }
    }

    return legalUser;
}

console.log(legalUsers(users))