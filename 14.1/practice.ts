const num: number = 2; // number

// function
function someFunc(a: number): number{
    return a + 1;
}

//functional argument in ts
function anotherFuncInFunc(fn: () => void): void{
    fn()
}

anotherFuncInFunc(() => {
    console.log("Hi i am in the inner function")
})

// custom types through interface
interface Human{
    name: string,
    age: number,
    address: {
        street: string,
        aptNum: number
    }
}

interface Animal{
    name: string,
    age: number,
    owner: Human
}

// custom type union which only works with type (not interface)
type HumanWAnimal = Human | Animal;