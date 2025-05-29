let callback = () => "Successful.";
final = callback();


let add = (a, b,callback) => a + b;
let result = add(10, 20,callback());

console.log(`The summation of 10 and 20 is :${result}`);
console.log(`Callback status: ${final}`);