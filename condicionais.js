console.log('condicionais.js');
// if if/else if/else if .../else
//switch/case/default
//?:(operador ternário)
//operadores lógicos && (E) || (OU) (pipe)

/*
let idade= parseInt(prompt('Idade:')); ;//se escrevermos 9 anos por exemplo ele pega o 9 por causa do parse int e da a idade


if(idade<10){
  console.log('criança');
} else if(idade<12) {
    console.log('pré adolescente');
} else if(idade< 21){
    console.log('adolescente');
} else if(idade<60){
    console.log('adulto');
} else{
    console.log('idoso');
}

*/
/*
let ano= "2019";
//NUNCA USAREMOS ==, SEMPRE ===
//NEM !=, SEMPRE !==

if(ano==2019) console.log('estamos em 2019!'); 
//se o if tiver só uma coisa dentro podemos botar na mesma linha, e como tem dois iguais ele não compara o tipo então imprime

if(ano===2019){ //mesmo tipo e valor 
  console.log('2019!!!!');
}
*/

//const temp= prompt("Temperatura:");


/*
IMPORTANTE: SE TIVERMOS ESSE EXEMPLO COM A TEMP, ESSE PARENTESES VAI SER LIDO PRIMEIRO E DEPOIS 
VAI CHECAR O &&, ELE VAI COMEÇAR PELOS PARENTESES E DEPOIS VAI CHECAR A OUTRA CONDIÇÃO. 

if(temp>=20 && (temp<=30 || temp>40)){

    console.log('Temperatura agradavel')
}

*/

/*
if(temp>=20 && temp<=30){

    console.log('Temperatura agradavel');
}

if(temp<0 || temp>40){
    console.log('Temperatura insuportavel');
}
*/




const tipo=2;

switch(tipo){
    case 1: console.log('Tipo 1'); break;
    case 2: console.log('Tipo 2');  break; //se não colocarmos o break ele vai falar Tipo 2 Tipo 3 e invalido
    case 3: console.log('Tipo 3'); break;
    default: console.log('Inválido');
}
