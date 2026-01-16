// ===============================
// Adding (concatenating) variables
// ===============================

// Variables can be added together.
// When we use + with strings, JavaScript concatenates the values.

const macaco = "Bugio";
const cor = "vermelho";

// Concatenation using +
console.log(macaco + cor);

// Output in the console:
// Bugiovermelho

// ===============================
// Sum with const variables
// ===============================

// Constants are used when the value should not change.

const IDADE_MULHER = 34;
const IDADE_HOMEM = 40;

// We can sum numeric constants using the + operator.
// Because these values are numbers (not strings),
// JavaScript performs a mathematical sum.

const TOTAL = IDADE_MULHER + IDADE_HOMEM;

// console.log displays the result in the console
console.log(IDADE_MULHER + IDADE_HOMEM);

// Output in the console:
// 74

// ===============================
// Numbers with quotes
// ===============================

// When a number is written inside quotes, it becomes a string (text),
// not a numeric value.

// Example:
const AGE_MONKEY = "5 + 7";

// Even though it looks like a calculation,
// JavaScript treats this as text, not as a sum.

// Because of the quotes, the value is NOT summable.
// It represents a string (argument), not a number.

// If we log it:
console.log(AGE_MONKEY);

// Output in the console:
// 5 + 7
// Correct way to perform a sum:

const AGE_MONKEY = 5 + 7;

console.log(AGE_MONKEY);

// Output:
// 12