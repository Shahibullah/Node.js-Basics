/*INTER CONVERSION*/
// jSON string => JSON object

const jsonString = '{"name":"Shahib","age":25,"city":"Dhaka","country":"Bangladesh"}';
const jsonObject = JSON.parse(jsonString);
console.log(`Converted Object is : `);
console.log(jsonObject);

console.log(`\n`);
//-------------------------------------------------------------------------
//JSON object => JSON string
const jsonObject2 = { name: 'Ahmmed Shahibullah Shahib', age: 25, city: 'Dinajpur', country: 'Bangladesh' }
const jsonString2  = JSON.stringify(jsonObject2);
console.log(`Converted String is : \n${jsonString2}`);