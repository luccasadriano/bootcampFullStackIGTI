// Somatório com while

//While
var numeroCont = 1
var somatorio = 0
while(numeroCont <= 10){
   // somatorio = somatorio + numeroCont
   somatorio += numeroCont
   numeroCont++

}
console.log('A soma é ' + somatorio)

//Do While
var numeroCont = 1
var somatorio = 0
do{
   somatorio += numeroCont
   numeroCont++
}while(numeroCont <= 10)
console.log('A soma é ' + somatorio)

//FOR
somatorio = 0
for(var numeroCont = 0; numeroCont <= 10; numeroCont++){
   somatorio += numeroCont
}
console.log('A soma é ' + somatorio)

