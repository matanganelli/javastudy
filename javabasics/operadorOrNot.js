// =======================================
// OPERADOR OR (||) E NOT (!) EM JAVASCRIPT
// =======================================
//
// Esses operadores seguem a LÓGICA BOOLEANA,
// ou seja, trabalham apenas com:
// true  (verdadeiro)
// false (falso)


// -------------------------------
// OPERADOR OR (||)
// -------------------------------
//
// OR (||) significa: OU
// Retorna true se PELO MENOS UM for true

console.log(true || true);
// true

console.log(true || false);
// true

console.log(false || true);
// true

console.log(false || false);
// false


// -------------------------------
// EXEMPLOS COM NÚMEROS (OR)
// -------------------------------

console.log(10 > 5 || 1 > 3);
// true || false → true

console.log(2 > 5 || 3 > 1);
// false || true → true

console.log(2 > 5 || 1 > 3);
// false || false → false


// -------------------------------
// OPERADOR NOT (!)
// -------------------------------
//
// NOT (!) significa: NÃO
// Ele INVERTE o valor booleano

console.log(!true);
// false

console.log(!false);
// true


// -------------------------------
// EXEMPLOS COM NÚMEROS (NOT)
// -------------------------------

console.log(!(10 > 5));
// !(true) → false

console.log(!(2 > 5));
// !(false) → true


// -------------------------------
// RESUMO
// -------------------------------
//
// OR  (||) → pelo menos um true
// NOT (!)  → inverte true ↔ false
