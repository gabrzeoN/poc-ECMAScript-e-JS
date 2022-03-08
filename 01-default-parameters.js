/*
Em 2015, com o lançamento do ES6, muitas mudanças começaram a
acontecer no JavaScript. Quais foram as mudanças abaixo?
- Default Parameters
- Template Strings
- Destructuring
*/

// -------------------- Default Parameters
// const nome = "Gabriel";
// const sobrenome = "Cari";
// const idade = 21;

//--1
// function darOi(nome, sobrenome){
//     console.log("Olá, " + nome + " " + sobrenome + ', seja muito bem-vindo!');
// }

// darOi(nome, sobrenome);
// darOi();
//--1

//--2
// function darOiDefault(nome = "Gabriel", sobrenome = "Cari"){
//     console.log("Olá, " + nome + " " + sobrenome + ', seja muito bem-vindo!');
// }

// darOiDefault();
// darOiDefault("Charlie", "Harper");
//--2

//--3
// function darOiDefaultFuncao(nome = retornarNome(), sobrenome = retornarSobrenome()){
//     console.log("Olá, " + nome + " " + sobrenome + ', seja muito bem-vindo!');
// }

// function retornarNome(){
//     return "Gabriel";
// }

// function retornarSobrenome(){
//     return "Cari";
// }

// darOiDefaultFuncao();
// darOiDefaultFuncao("Charlie", "Harper");
//--3

//--4 Caso de erro
// function f(a = go()) {
//     function go(){return ":P"}
// }

// f();
//--4