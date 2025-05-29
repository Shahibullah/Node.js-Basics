// Taking input
let prompt = require("prompt-sync")();
const age = Number(prompt("Enter your age : "));
if (age < 18){
    console.log("You get a 20% Discount!");
}else{
    console.log("You get a 30% senior Discount!");
}