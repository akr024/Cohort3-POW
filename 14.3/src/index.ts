// API Pick

type UserType = {
    name: string,
    age: number,
    address: string,
    ssn: string
}

type UserInfo = Pick<UserType, 'name' | 'age'>

const user1: UserInfo = {
    name: "user1name",
    age: 29
}

