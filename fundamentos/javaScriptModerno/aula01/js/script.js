'use strict' //O javaScript

/* var x let

var tem o escopo abrangente
let tem o escopo reduzido
*/

function withVar(){
   for(var i = 0; i < 10; i++){
      console.log('var' + i)
   }

   i = 20
   console.log(i)
}

function withLet(){
   for(let i = 0; i < 10; i++){
      console.log('let' + i)
   }

   // i = 20
   // console.log(i)
}

withVar()
withLet()

//const - não podemos reatribuir valores.

// const c = 10
// c = 10

//menos para array e objeto que são tipo de dados de referencia, não garante a imutabilidade total
const d = []
console.log(d)

d.push(1)
console.log(d)


//comparar functions com arrow functions
//Função
function sum(a, b){
   return a + b
}
//Função anônima
const sum2 = function (a, b){
   return a + b
}
//arrow function
const sum3 = (a, b) =>{
   return a + b
}
//arrow function reduzida
const sum4 = (a, b) => a + b

console.log(sum(2, 3))
console.log(sum2(2, 3))
console.log(sum3(2, 3))
console.log(sum3(2, 3))


//Template literals
const name = 'Luccas'
const surName = 'Adriano'
const text1 = 'Meu nome é ' + name + ' ' + surName
const text2 = `Meu nome é ${name} ${surName}`
console.log(text1)
console.log(text2)

// default parameters
const sum5 = (a , b) => a + b
console.log(sum5(2))
console.log(sum5(null, 8)) // o deve ser segundo default parameters
