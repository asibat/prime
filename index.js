const readline = require('readline');

const {parseInput} = require('./parse')
const {getPrime} = require('./operations')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Provide start and end number for range (space between numbers):    ', (input) => {
  const {start, end} = parseInput(input)
  getPrime(start, end)

  rl.close();
});
