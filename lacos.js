console.log('lacos.js');
// for, while, do while, foreach

/* problema do string padding(ou apenas pad), que significa completar string o problema

txt="info"
tamanho=10
caracteres= "#"

queremos q tenha tamanho 10 e completemos com # resp= info######

*/

let txt='info';
const tam= 10;
const char= '#';

//para (for)
// const qtd= tam - txt.length;
// for(let i=0; i<qtd; i++){ //iterador: ele iterou 10 vezes= ele rodou 10 vezes o que estava dentro
    // txt+=char;
// }

// crtl / coloca direto pra comentarios

while(txt.length<10){
    txt +=char;
}
console.log(txt); //info#######

const nomes=[]; //vetor/array

//crtl alt tab troca do google pro vscode

console.log(nomes.length); //0
nomes.push('Bernardo');
nomes.push('Marina');
console.log(nomes); //mostra como vetor ["Bernardo", "Marina"]
console.table(nomes); //mostra como uma tabela
console.log(nomes[0], nomes[1]); //mostra só os dois Bernardo Marina
// nomes[2] não!

console.log(nomes[nomes.length-1]); //mostra sempre o ultimo
nomes.push('Jean Luca');
console.log(nomes[nomes.length-1]);


for(let i=0; i< nomes.length; i++){
    //console.log('Nome', i+1, nomes[i]);
    console.log(`Nome ${i+1} ${nomes[i]}`)
}

//for each (para cada) não tem indice 
for(const nome of nomes){
    console.log('Nome ', nome)
}