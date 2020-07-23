/*
map -> gera um novo array transformando os dados.
filter -> gera um novo array filtrando elementos com base em proposição.
forEach -> percorre todos os elementos do arra, aplicando lógica.
reduce -> realiza cálculo iterativo com base nos elementos.
find  -> encontra elementos com base em proposições.
some -> verifica se há pelo menos um elemento que atenda à proposição. e retorna true ou false
every -> verifica se todos os elementos atendem à proposição. e retorna true ou false
sort -> ordena os elementos com base em um critério. faz ordenação no array
*/

window.addEventListener('load', () => {//quando usar a função anônima ou declara, se declara quando quer reutilizar a função em mais de um local em seu código, quando não for reaproveitar utilizar a função anônima.

   doMap()
   doFilter()
   doForEach()
   doReduce()
   doFind()
   doSome()
   doEvery()
   doSort()

console.log(people)
})

function doMap(){
   const nameEmailArray = people.results.map(person => {
      return {
         name: person.name,
         email: person.email
      }
   })
console.log(nameEmailArray)

return nameEmailArray
}

function doFilter(){
   const olderThan50 = people.results.filter(person =>{
      return person.dob.age > 50
   })
console.log(olderThan50)
}

function doForEach(){
   const mappedPeople = doMap()
   
   mappedPeople.forEach(person =>{//forEach é mutavel
      person.nameSize = 
      person.name.title.length + 
      person.name.first.length + 
      person.name.last.length
   })
console.log(mappedPeople)
}

function doReduce(){
   const totalAges = people.results.reduce((accumulator, current) => {
      return accumulator + current.dob.age
   }, 0)
   console.log(totalAges)
}

function doFind(){
   const found = people.results.find(person => {
      return person.location.state === 'Minas Gerais'
   })
   console.log(found)
}

function doSome(){
   const found = people.results.some(person =>{
      return person.location.state === 'Amazonas'
   })
   console.log(found)
}

function doEvery(){
   const very = people.results.every(person =>{
      return person.nat === 'BR'
   })
   console.log(very)
}

function doSort(){
   const mappedNames = people.results.map(person => {
      return {
         name: person.name.first
      }
   })
   .filter(person => person.name.startsWith('A'))
   .sort((a, b) => {
      return a.name.localeCompare(b.name)
      // return b.name.length - a.name.length
   })

   // .map(person => person.name.first)
   // .filter(person => person.startsWith('A'))
   // .sort()
   console.log(mappedNames)
}

