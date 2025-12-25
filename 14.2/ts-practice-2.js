"use strict";
// interface RandomType {
//     age?: number, // optional field
//     name: string
// }
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    name: "user1",
    age: 17
};
const user2 = {
    name: "user2",
    age: 39
};
const users = [user1, user2];
function legalUsers(users) {
    const legalUser = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            legalUser.push(users[i]);
        }
    }
    return legalUser;
}
console.log(legalUsers(users));
//# sourceMappingURL=ts-practice-2.js.map