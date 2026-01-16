// ===============================
// VARIABLES: let and const
// ===============================

// let is a variable that can change its value after being declared.
let nomeVariavel;

// const is a constant variable, its value cannot be reassigned.
const NOME_VARIAVEL = "value";

// -------------------------------
// Naming conventions
// -------------------------------

// It is common to see variables declared like this:
let nomeVariavel;
const NOME_VARIAVEL;

// Using const in uppercase is intentional and related to organization and readability.
// Uppercase is usually used when the value should never change.

// let does not need to be uppercase and usually follows camelCase naming.

// -------------------------------
// Best practice
// -------------------------------

// In general, const is preferred.
// Use let only when you know the value will need to change.

// ===============================
// let and const - complete syntax
// ===============================

// To fully write a variable in JavaScript, we use:
// =  to assign a value
// "" to represent a string
// ;  to end the statement

// Example using let
let macaco = "banana";

// The value of a let variable can be changed later
macaco = "laranja";

// Example using const
const BANANAS_QUANTIDADE = 5;

// A const variable cannot be reassigned
// BANANAS_QUANTIDADE = 10; // ❌ This would cause an error

