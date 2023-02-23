const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Enter the first number ', (numberOne) => {
  rl.question('Enter the second number: ', (numberTwo) => {
    
    
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
    
    
    console.log(`The sum of ${numberOne} and ${numberTwo} is: ${numberOne + numberTwo}`);
    console.log(`The subtraction of ${numberOne} and ${numberTwo} is: ${numberOne - numberTwo}`);
    console.log(`The multiplication of ${numberOne} and ${numberTwo} is: ${numberOne * numberTwo}`);
    console.log(`The division of ${numberOne} and ${numberTwo} is: ${numberOne / numberTwo}`);
    
 
    rl.close();
  });
});