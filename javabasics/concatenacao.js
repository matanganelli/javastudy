// =======================
// Concatenação e coerção em JavaScript
// =======================

//Se tiver String é concatenação
// 1. String + String
// Junta os textos (concatenação)
let a = "Hello";
let b = "World";

console.log(a + " " + b); 
// Hello World

// 2. Number + String
// O number é convertido para string
let idade = 30;
let texto = " anos";

console.log(idade + texto); 
// "30 anos"

console.log(typeof (idade + texto)); 
// string

// 3. String + Number
// Também vira string
let preco = "Preço: ";
let valor = 50;

console.log(preco + valor); 
// "Preço: 50"

// 4. Number + Number
// Soma matemática normal
let x = 10;
let y = 5;

console.log(x + y); 
// 15

// 5. Boolean + String
// Boolean vira string
let ativo = true;

console.log("Usuário ativo: " + ativo); 
// "Usuário ativo: true"

// 6. Boolean + Number
// true = 1 | false = 0
console.log(true + 1);   // 2
console.log(false + 1);  // 1

// 7. Boolean + Boolean
// Soma numérica
console.log(true + true);   // 2
console.log(true + false);  // 1
console.log(false + false); // 0

// 8. String + Boolean
// Boolean vira string
console.log("Status: " + false); 
// "Status: false"

// 9. Ordem importa
console.log(1 + 2 + "3"); 
// "33"  → primeiro soma (1+2), depois concatena

console.log("1" + 2 + 3); 
// "123" → tudo vira string desde o início
