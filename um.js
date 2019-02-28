//NÃO VAMOS USAR O "VAR", USAREMOS "LET" OU "CONST"
var x = 'exemplo bobo'; 
//var é uma variavel global
//acessivel em qualquer lugar
//assim, se tivermos dois src por exemplo com 2 programas se eles tiverem uma mesma var, vai dar erro
if(true) {
    var y= 'outro exemplo bobo';
}

//if true é um if que sempre entra

if(true){
    let z='variavel com escopo';
    //por z ser uma var local, ele só existe dentro dessas chaves
    if(true){
        console.log(z);
        
        let t='t'
    }
    console.log(t);  //por estar dentro daquelas outras chaves, aqui ele vai 
}

//x e y são globais e z é local, se fora do if colocarmos z ele vai dizer que não existe.