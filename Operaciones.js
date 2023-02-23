const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Ingrese el primer número: ', (numberOne) => {
  rl.question('Ingrese el segundo número: ', (numberTwo) => {
    
    
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
    
    
    console.log(`La suma de ${numberOne} y ${numberTwo} es: ${numberOne + numberTwo}`);
    console.log(`La resta de ${numberOne} y ${numberTwo} es: ${numberOne - numberTwo}`);
    console.log(`La multiplicación de ${numberOne} y ${numberTwo} es: ${numberOne * numberTwo}`);
    console.log(`La división de ${numberOne} y ${numberTwo} es: ${numberOne / numberTwo}`);
    
 
    rl.close();
  });
});