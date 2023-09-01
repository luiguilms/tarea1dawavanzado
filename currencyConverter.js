const readline = require('readline');

const exchangeRate = 0.85; // Tasa de cambio fija: 1 dólar = 0.85 euros

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Bienvenido al Convertidor de Moneda');
console.log('---------------------------------\n');
console.log('Este programa convierte una cantidad en dólares a euros utilizando una tasa de cambio fija.\n');

rl.question('Por favor, ingresa la cantidad en dólares que deseas convertir: ', (dollars) => {
  const euros = dollars * exchangeRate;
  console.log(`\n${dollars} dólares son aproximadamente ${euros.toFixed(2)} euros.\n`);
  rl.close();
});
