const prompt = require('prompt-sync')();
var arr = [
    "Hi",
    "Hello",
    "Bonjour"
  ];
  
// append new value to the array
arr.push(['dd','ddd','ddd']);
console.log(arr)
console.log(arr.length)
console.log(arr[3][0])

const teste = prompt('Qual a matricula desse aluno? ')