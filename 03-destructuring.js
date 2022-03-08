// -------------------- Destructuring
let varExistente = null;

let frutas = ["pera", "uva", "manga"];

let eu = {
    nome: "Gabriel",
    sobrenome: "Cari",
    idade: 21,
    categoriaJogos: {
        fps: ["CS", "Valorant",
            {
                jogoLixo: "Apex",
                jogoSuperLixo: "bf"
            }
        ],
        moba: ["LOL"],
        mmorpg: ["Aika", "Skyrim", "The Witcher"]
    },
    idiomas: ["pt-br", "en"]
};

//-- Método antigo
// console.log(eu.nome);
// console.log(frutas[0]);
// console.log(eu.idiomas[0]);
// console.log(eu.categoriaJogos.fps[2].jogoSuperLixo);

//-- Objeto
// const {nome} = eu;
// console.log(nome);

// const { categoriaJogos } = eu;
// console.log(categoriaJogos);

// const { jogoLixo } = eu.categoriaJogos.fps[2];
// console.log(jogoLixo);

//-- Renomear
// const {nome: myName} = eu;
// console.log(myName);

// -- Variável existente ;
// ( {nome: varExistente} = eu);
// console.log(varExistente);

//-- Vetor
// const [pera, uvaRenomeada, manga] = frutas;
// console.log(manga);

// const [ , b, c] = frutas;
// console.log(b, c);

//-- Resto
// const [ , ...rest] = frutas;
// console.log(rest);

// const { nome, ...rest} = eu;
// console.log(rest);

//-- Funções
// function liquidificador([posZero, ...posUm]){
//     console.log(posZero + posUm);
// }
// liquidificador(frutas);

// function liquidificador([posZero, ...posUm]){
//     console.log(posZero + posUm);
// }
// liquidificador("frutas");

// function euu({ nome }){
//     console.log(nome);
// }
// euu(eu);