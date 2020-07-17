//Testando o IF ElSE
let a = 7
let b = 7

if(a > b){
   console.log(a + ' é maior que ' + b)
}else if(a < b){
      console.log(a + ' é menor que ' + b)
   }else{
      console.log(a + ' é igual a ' + b)
}

//Testando o switch
let dia = 3
switch(dia){
   case 1: r = 'Domingo'; break
   case 2: r = 'Segunda'; break
   case 3: r = 'Terça'; break
   case 4: r = 'Quarta'; break
   case 5: r = 'Quinta'; break
   case 6: r = 'Sexta'; break
   case 7: r = 'Sábado'; break

   default: r = "Dia inválido"
}
console.log(r)

//Operadir Ternário

a = 6
b = 7
let resposta = a > b ? 'Maior' : a < b ? 'Menor' : 'Igual';
console.log(resposta)