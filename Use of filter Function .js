//Use of filter function and String Printing
const ages = [32,33,16,40];
const result = ages.filter(CheckAges);
function CheckAges(age)
    {return age < 30}
    console.log(result);
const num = ages.filter(even_checker);
function even_checker(num)
    {return num % 2 === 0;}
    console.log(`${num} These are even ages.`);
    
for (let i = 0; i < ages.length ; i++) 
    {
    if (ages[i] % 2 == 0) 
   
        {console.log(`${ages[i]} Even`);}
    else 
        {console.log(`${ages[i]} Odd`);}
    }
