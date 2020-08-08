console.log('Hello world!')
console.log(process.argv)

//Multiplos de 3 ou de 5

const numero = parseInt(process.argv[2])
const multiplos = []

for(let i =0; i < numero; i++){
   if (i % 3 ===0 || i % 5 === 0){
      multiplos.push(i)
   }
}
console.log(multiplos)