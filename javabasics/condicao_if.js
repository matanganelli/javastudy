// condicao_if.js
// Explicação simples sobre condição if em JavaScript

// Uma condição é uma verificação que resulta em true ou false.
// O if só executa o bloco de código se a condição for true.

// Estrutura básica:
if (true) {
  console.log("Este código é executado porque a condição é true");
}

// Se a condição for false, o bloco NÃO é executado
if (false) {
  console.log("Este texto não aparece no console");
}

// Exemplo usando uma variável booleana
const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Usuário está logado");
}

// Exemplo com valor false
const isAdmin = false;

if (isAdmin) {
  console.log("Acesso liberado");
}

// Resumo:
// if (valorBooleano) {
//   código executa apenas se for true
// }