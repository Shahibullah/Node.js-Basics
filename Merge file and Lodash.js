// merging  .js file .we have to import that file by using "const notes = require('./child file name.js');
/*console.log("This is my child of server.");
let userName = "Ahmmed Shahibullah Shahib";
module.exports = {userName};
*/
const notes = require('./new.js');
console.log('File is available...');

var userName = notes.userName;
console.log(userName);

/*When we need uniq element in array ,we use lodash*/
var _ = require('lodash');
myList = [1,1,1,1,1,"car","car"];
console.log(_.uniq(myList));