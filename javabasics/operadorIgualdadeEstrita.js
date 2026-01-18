/**
 * OPERADOR === (igualdade estrita)
 *
 * O operador === compara dois valores verificando:
 * 1. O valor
 * 2. O tipo do dado
 *
 * Ele retorna true apenas se os dois forem exatamente iguais
 * em valor E em tipo.
 */

// Comparando dois números
const a = 10;
const b = 10;

console.log(a === b); // true
// Ambos são números e têm o mesmo valor

// Comparando número e string
const c = 10;
const d = "10";

console.log(c === d); // false
// O valor parece igual, mas os tipos são diferentes

// Comparando valores diferentes
const e = 5;
const f = 7;

console.log(e === f); // false
// Os valores são diferentes

// Exemplo com booleanos
const ligado = true;

console.log(ligado === true);  // true
console.log(ligado === false); // false

/**
 * RESUMO
 *
 * === é usado quando queremos uma comparação segura,
 * evitando conversões automáticas de tipo.
 *
 * Sempre prefira === ao invés de ==
 */
