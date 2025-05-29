// Taking input
let prompt = require("prompt-sync")();
const age = Number(prompt("Enter your age : "));
if (0 < age && age < 18) {
    console.log("You get a 20% Discount!");
}
else if (age >= 18 && age < 60) {
    console.log("Normal ticket price applicable");
}
else if (age >= 60 || age > 100) {
    console.log("You get a 30% senior Discount!");
}
else{
    console.log("Invalid age");
}