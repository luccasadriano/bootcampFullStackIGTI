/*
Spread -> em array, este operador espalha os itens do array, que podem ser recuperados para compor outro array
Rest -> é comum a utilização em funções, agrupando os parâmentros em um array. principal aplicação permitir funções
com números infinitos de parâmentros
//destructuring -> facilita a escrita ao trabahar com objetos, com arrays usando []
*/
window.addEventListener('load', () => {
   doSpread()
   doRest()
   doDestructuring()
})
function doSpread(){
   const marriedMen = people.results.filter(
      person => (person.name.title === 'Mr')
   )
   const marriedWomen = people.results.filter(
      person => (person.name.title === 'Ms')
   )

   const marriedPeople = [...marriedWomen, ...marriedMen, {msg: 'Olá'}]
   console.log(marriedPeople)
//    console.log(marriedMen)
//    console.log(marriedWomen)
}

function doRest(){
   console.log(infiniteSum(1, 2))
   console.log(infiniteSum(1, 2, 100))
   console.log(infiniteSum(1, 2, 3, 4000, 4, 5, 6, 7, 8, 9))
}
function infiniteSum(...numbers){
   return numbers.reduce((acc, curr) => acc + curr, 0)
}

function doDestructuring(){
   first = people.results[0]
   //repetitivo, sem destructuring
   // const username = first.login.username
   // const password = first.login.password

   //usando destructuring
   const { username, password } = first.login
   
   console.log(username)
   console.log(password)
}