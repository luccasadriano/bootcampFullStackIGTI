//ES6 module
function soma (a, b){
   return a + b
}

function subtracao(a, b){
   return console.log(a - b)
}

const nome = 'teste de exportação'

export default {soma, subtracao, nome }