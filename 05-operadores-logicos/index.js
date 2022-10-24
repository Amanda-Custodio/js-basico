/*
|   == --- igual --- a==b --- verdadeiro se a for igual a b
|   === --- idêntico --- a === b --- vdd se a for idêntico a b
|   !== --- não idêntico --- a !== b --- vdd se a NÃO for idêntico a b
|   != --- diferente --- a != b --- verdadeiro se a for diferente de b
|   < --- menor que --- a < b --- vdd se a for menor que b
|   < --- menor ou igual que --- a <= b --- vdd se a for menor ou igual a b
|   < --- maior que --- a > b --- vdd se a for maior que b
|   < --- maior ou igual que --- a >= b --- vdd se a for maior ou igual a b
*/

// const a = 3
// const b = 3

// console.log(a >= b)


const a = 2
const b = 2

console.log(a === b && a >= b)

// OR
console.log(a === b || a < b)