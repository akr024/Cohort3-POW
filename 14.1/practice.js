"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const num = 2; // number
// function
function someFunc(a) {
    return a + 1;
}
//functional argument in ts
function anotherFuncInFunc(fn) {
    fn();
}
anotherFuncInFunc(() => {
    console.log("Hi i am in the inner function");
});
//# sourceMappingURL=practice.js.map