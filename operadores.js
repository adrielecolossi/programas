console.log('operadores.js');

//+ - * / % **

const dois= 2;
console.log(dois + 5); //7
console.log(dois - 5); //-3
console.log(dois * 5); //10
console.log(10 / dois); //5
console.log( dois ** 10); //1024
console.log(11 % dois); //1

let u=3;
u++; //u += 1; u = u+1;
console.log(u); //4
console.log(u++); //4 pós-incremento, apenas depois disso q vai imprimir o 5, logo:
console.log(u); //5
console.log(++u); //6 é um pré incremento, logo, imprime direto o 6
