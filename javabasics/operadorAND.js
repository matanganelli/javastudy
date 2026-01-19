// =======================================
// OPERADOR AND (&&) EM JAVASCRIPT
// =======================================
//
// O operador && segue a LÓGICA BOOLEANA.
// Isso significa que ele trabalha apenas com:
// true  (verdadeiro)
// false (falso)
//
// AND (&&) significa: E
// Só retorna true se TODAS as condições forem true.

// -------------------------------
// CASOS BÁSICOS
// -------------------------------

console.log(true && true);
// true → tudo verdadeiro

console.log(true && false);
// false → um falso já invalida

console.log(false && true);
// false → um falso já invalida

console.log(false && false);
// false → tudo falso


// -------------------------------
// EXEMPLOS COM NÚMEROS
// -------------------------------

console.log(10 > 5 && 3 > 1);
// true && true → true

console.log(10 > 5 && 1 > 3);
// true && false → false

console.log(2 > 5 && 3 > 1);
// false && true → false


// -------------------------------
// RESUMO
// -------------------------------
//
// AND (&&) = E
// true  && true  → true
// qualquer false → false
//
// Ele sempre retorna true ou false