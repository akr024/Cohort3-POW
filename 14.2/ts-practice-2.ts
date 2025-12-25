interface RandomType {
    age?: number, // optional field
    name: string
}

const user: RandomType = {
    name: "random name",
    age: 30
}

// also works without age as age is optional because of ? at the end
const userWithoutAge: RandomType = {
    name: "random name"
}