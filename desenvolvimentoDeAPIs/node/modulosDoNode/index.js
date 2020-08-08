import operacoes from './operacoes.js'
import mult from './operacoesMul.js'
import {divisao, resto} from './operacoesNomeadas.js'

console.log(operacoes.soma(2,3))
operacoes.subtracao(3, 2)
console.log(mult(2, 3))
console.log(operacoes.nome)
console.log(divisao(12, 6))
console.log(resto(7, 2))

//utilizar o node --experimental-modules index.js para executar se o node for -v 12.16