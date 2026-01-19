// ===============================
// TIPOS EM JAVASCRIPT
// ===============================

// JavaScript é uma linguagem de tipagem dinâmica,
// ou seja: o tipo depende do valor, não da variável.

// -------------------------------
// STRING (texto)
// -------------------------------

let nome = "Maria";
let sobrenome = 'Silva';

console.log(nome);
console.log(typeof nome); 
// string → texto sempre fica entre " " ou ' '


// -------------------------------
// NUMBER (números)
// -------------------------------

let idade = 30;
let altura = 1.65;

console.log(idade);
console.log(typeof idade); 
// number → números inteiros ou decimais


// -------------------------------
// BOOLEAN (verdadeiro ou falso)
// -------------------------------

let maiorDeIdade = true;
let temCarteira = false;

console.log(maiorDeIdade);
console.log(typeof maiorDeIdade); 
// boolean → só pode ser true ou false


// -------------------------------
// UNDEFINED
// -------------------------------

let cidade;

console.log(cidade);
console.log(typeof cidade); 
// undefined → variável criada, mas sem valor


// -------------------------------
// NULL
// -------------------------------

let telefone = null;

console.log(telefone);
console.log(typeof telefone); 
// null → ausência intencional de valor
// curiosidade: typeof null retorna "object" (erro histórico do JS)


// -------------------------------
// OBJECT
// -------------------------------

let pessoa = {
  nome: "Ana",
  idade: 25,
  estudante: true
};

console.log(pessoa);
console.log(typeof pessoa); 
// object → conjunto de dados (chave: valor)


// -------------------------------
// ARRAY (lista) – também é object
// -------------------------------

let frutas = ["maçã", "banana", "uva"];

console.log(frutas);
console.log(typeof frutas); 
// object → arrays são listas


// -------------------------------
// FUNCTION
// -------------------------------

function soma(a, b) {
  return a + b;
}

console.log(soma(2, 3));
console.log(typeof soma); 
// function → bloco de código reutilizável


// -------------------------------
// RESUMO DOS TIPOS
// -------------------------------

// string   → texto
// number   → números
// boolean  → true / false
// undefined→ não definido
// null     → vazio intencional
// object   → objetos e arrays
// function → funções