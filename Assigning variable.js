/* Assigning variable in node js*/

/*var: Declares a function-scoped variable. It is accessible within the function where it is declared, or globally if declared outside any function. However, var is less recommended than let and const due to its hoisting behavior. */
var name = "Shahib";
console.log(name);
var age = 23;
console.log(age)

/*let: Declares a block-scoped variable. It is accessible only within the block where it is defined. */
let Department = "CSE";
let hobbies = ["Coding","Watching Films","Music"];
console.log(hobbies);
/* const: Declares a constant variable. Its value cannot be reassigned after initialization.*/
const ID = 22301025;
console.log(ID);