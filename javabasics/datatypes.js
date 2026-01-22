// =======================
// JavaScript Data Types
// =======================

// 1. Number
// Usado para números inteiros e decimais
let idade = 30;
let altura = 1.72;

console.log(typeof idade);   // number
console.log(typeof altura);  // number

// 2. String
// Usado para textos (entre aspas simples, duplas ou crase)
let nome = "Maria";
let curso = 'Ciência da Computação';

console.log(typeof nome); // string

// 3. Boolean
// Representa verdadeiro ou falso
let aprovado = true;
let maiorDeIdade = false;

console.log(typeof aprovado); // boolean

// 4. Undefined
// Variável declarada, mas sem valor atribuído
let resultado;

console.log(resultado);        // undefined
console.log(typeof resultado); // undefined

// 5. Null
// Representa ausência intencional de valor
let endereco = null;

console.log(endereco);        // null
console.log(typeof endereco); // object (isso é uma peculiaridade do JS)

// 6. Object
// Estrutura para armazenar dados em pares chave-valor
let pessoa = {
  nome: "Ana",
  idade: 25,
  estudante: true
};

console.log(typeof pessoa); // object

// 7. Array
// Lista de valores (tecnicamente é um tipo especial de object)
let notas = [8, 9, 10];

console.log(typeof notas); // object
console.log(Array.isArray(notas)); // true

// 8. Function
// Bloco de código reutilizável
function somar(a, b) {
  return a + b;
}

console.log(typeof somar); // function

// 9. Symbol (menos comum)
// Usado para criar identificadores únicos
let id = Symbol("id");

console.log(typeof id); // symbol

// 10. BigInt
// Para números inteiros muito grandes
let numeroGigante = 123456789012345678901234567890n;

console.log(typeof numeroGigante); // bigint
