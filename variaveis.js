console.log('variaveis.js');
let nome= 'Bruce';
nome= 'Peter';
console.log(nome);
const sobrenome= 'Parker'; //const pois não vai mudar
console.log(sobrenome);
console.log(nome, sobrenome);
console.log(nome + ' ' + sobrenome); //concatenação
console.log(`Nome: ${nome} ${sobrenome} ${2+2}`); //interpolação
//o q esta entre $ ele executa

/*
para abrir o explorer é ctrl \
*/

let v1= null;
//mesma coisa q let v1, ele daria undefined
console.log(v1); //null= sem valor;
v1= undefined;
console.log(v1); //*valor* indefinido
//console.log(v2); //*variavel* indefinida(É ERRO, NÃO PODE!)

//IMPORTANTE: SE DER INDEFINIDO EM ALGO, O RESTO DO PROGRAMA NÃO FUNCIONA
let v3 = 8;
let v4 = v3;
v3= 5;
console.log(v3, v4);

//elas vão ficar v3=5 e v4=8
//os tipos podem ser number string array e object
console.log(typeof(v3)); //number