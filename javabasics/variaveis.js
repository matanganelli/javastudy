// ================================
// SINTAXE DAS VARIÁVEIS EM JAVASCRIPT
// ================================

// Uma variável serve para GUARDAR um valor na memória.
// Pense nela como uma "caixinha" com um nome.

// -------------------------------
// 1. var (forma antiga – evite usar)
// -------------------------------

// 'var' foi a primeira forma de criar variáveis em JS.
// Hoje em dia, quase não se usa mais.

var idade = 30;
console.log(idade);

// Problemas do 'var':
// - ignora escopo de bloco
// - pode causar bugs difíceis de encontrar


// -------------------------------
// 2. let (forma moderna)
// -------------------------------

// 'let' é usado quando o valor PODE mudar.

let contador = 0;
contador = contador + 1;

console.log(contador);

// 'let' respeita escopo de bloco (mais seguro)


// -------------------------------
// 3. const (forma moderna e recomendada)
// -------------------------------

// 'const' é usado quando o valor NÃO deve mudar.
// Isso NÃO significa que o valor é imutável,
// e sim que a referência não pode ser trocada.

const nome = "Antonia";
console.log(nome);

// nome = "Maria"; // ❌ Isso gera erro


// -------------------------------
// 4. Nomes de variáveis (regras)
// -------------------------------

// ✅ pode
let idadeUsuario;
let totalCompra;
let precoFinal;

// ❌ não pode
// let 1idade;
// let nome-usuario;
// let let;

// Use camelCase por convenção:
let quantidadeItens;


// -------------------------------
// 5. Variáveis podem guardar qualquer tipo
// -------------------------------

let numero = 10;
let texto = "Olá";
let booleano = true;
let lista = [1, 2, 3];
let objeto = { cor: "azul", tamanho: "M" };

console.log(numero, texto, booleano, lista, objeto);


// -------------------------------
// 6. Boas práticas importantes
// -------------------------------

// ✔️ Use const sempre que puder
// ✔️ Use let quando precisar mudar o valor
// ❌ Evite var
// ✔️ Dê nomes claros às variáveis

// Exemplo ruim:
let x = 5;

// Exemplo bom:
let quantidadeDeProdutos = 5;