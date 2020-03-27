
// test es6 function
const add = (n1: number) => {
    return n1;
}
console.log(add(22));

// function return a string

function showResult(text): string{
    return text;
}
console.log(showResult('hello'))

// pass a function to a variable
let showNumber: (a: number) => number;
showNumber = add
//showNumber = showResult; // this would error;
console.log(showNumber(1))

// void core type
function returnVoid(): void {
    const result = 1;
    return; // not a must
}
// result will be undefined but can hande even without return keyword;
console.log(returnVoid()); 


// undefined core type
function returnUndefined(): undefined {
    const result = 1;
    return; // a must
}
// result would be undefined but must have a return keyword
console.log(returnUndefined());