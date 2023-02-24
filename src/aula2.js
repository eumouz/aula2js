let numero = 10;
let numero2 = 20;
let numero3 = 10 + 20;
let numero4 = 50;

let soma = numero + numero2;
let sub = numero - numero2;
let div = numero / numero2;
let mult = numero * numero2;
let numero5 = numero4;

console.log(soma);
console.log(sub);
console.log(div);
console.log(mult);
console.log(numero3);
console.log(numero5);

let a = 7;
let b = 3;

//atribuição aditiva
//esta é a maneira que esse tipo de atribuição ocorre
b += a; // b = b + a
console.log(b);
//atribuição subtrativa
b -= a;
console.log(b);
//atribuição multiplicativa
b *= a;
console.log(b);
//atribuição divisória
b /= a;
console.log(b);
//atribuição com resto de divisão
b %= 2;
console.log(b);

/*
v ou v = v | v e v = v | v xor v = f| !v = f
v ou f = v | v e f = f | v xor f = v |!f = f
f ou f = f | f e f = f | f xor f|
*/

//o OU  é representado por 2 pipes ||
// o E é representado pelos 2 &&
//podemos usar o diferente para substituit o xor

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; //ou
  const comprarTv50 = trabalho1 && trabalho2; //E
  //const comprarTv32 = !!(trabalho1 ^ trabalho2)//bitwise xor
  const comprarTv32 = trabalho1 != trabalho2; //xor
  const manterSaudavel = !comprarSorvete; //negação

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}
console.log(compras(false, false));

/*aqui estamos fazendo uma comparação de igualdade de 
valores*/
console.log("(01)", "1" == 1);

/*aqui estamos testando se os numeros são extritamente iguais
ou seja, se o valor eo tipo são os mesmos*/
console.log("(02)", "1" === 1);

/*aqui estamos fazendo uma comparação  por diferença
de valores*/
console.log("(03)", "1" != 1);

/*aqui estamos vendo se os numeros são extritamente 
diferentes, ou seja,alem do valor tambem do tipo*/
console.log("(04)", "3" !== 1);

/*aqui vamos comparar se um numero é maior que o outro*/
console.log("(05)", 5 > 1);

/*aqui vamos comparar se um numero é menor  que o outro*/
console.log("(05)", 5 < 1);

/*aqui vamos comparar se um numero é maior que o 
outro ou igual*/
console.log("(07)", 5 >= 1);

/*aqui vamos comparar se um numero é menor que o 
outro ou igual*/
console.log("(08)", 5 <= 1);
