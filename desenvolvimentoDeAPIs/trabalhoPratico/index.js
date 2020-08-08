const fs  = require('fs')
// const fs  = require('fs').promises

// async function createJson(){
//    try {
//       const dataCidade = JSON.parse(await fs.readFile("Cidades.json"))
//       const dataEstado = JSON.parse(await fs.readFile("Estados.json"))

//       await dataEstado.forEach((estado) => {
//          const tste = dataCidade.filter((cidade) => {
//           return estado.ID === cidade.Estado
//          })
//          fs.writeFile(`${estado.Sigla}.json`, JSON.stringify(tste, null, 2))
//          console.log(tste)
//       })
      
//    } catch (err) {
//       console.log(err)
//    }
// }

// async function filterQdtCity(uf){

//    try{

//       const countUf = JSON.parse(await fs.readFile(`${uf}.json`)).length
//       // const test = countUf.length
//       console.log(`${uf} - ${countUf}`)

//    }catch(err){
//       console.log(err)
//    }
// }

// async function read(){
//    const dataCidade = await fs.readFile("Cidades.json")
//    const dataEstado = await fs.readFile("Estados.json")

//    console.log(JSON.parse(dataCidade))
//    console.log(JSON.parse(dataEstado))

// }

const countCity = (uf) => JSON.parse(fs.readFileSync(`${uf}.json`, "UTF-8")).length

const descInForNumbers = (a, b) => b.count - a.count
const ascInForNumbers = (a, b) => a.count - b.count

const ascInForLenght = (a, b) => {
   if( a.Nome.length < b.Nome.length) return -1;
   if ( a.Nome.length > b.Nome.length) return 1;
   if ( a.Nome.length == b.Nome.length) return a.Nome.localeCompare(b.Nome)
}

const descInForLength = (a, b) => {
   if( a.Nome.length < b.Nome.length) return 1;
   if ( a.Nome.length > b.Nome.length) return -1;
   if ( a.Nome.length == b.Nome.length) return a.Nome.localeCompare(b.Nome)
}

function StateWith5BiggerCity(dataEstado, sort){

   try{
      
     const arrayCountCity = dataEstado.map(estado => ({...estado, count: countCity(estado.Sigla)}))
     const sortArray = arrayCountCity.sort(sort)
     const result = sortArray.slice(0, 5).map(estado => `${estado.Sigla} - ${estado.count}`)

   return result
      
   }catch(err){
      console.log(err)
      
   }
}

function BiggerNameCity(dataEstado, sort){
   const result = []
   try{

      dataEstado.forEach(estado => {
         const BiggerCity = JSON.parse(fs.readFileSync(`${estado.Sigla}.json`)).sort(sort)[0]
         result.push(`${BiggerCity.Nome} - ${estado.Sigla} - ${BiggerCity.Nome.length}`)
      })

   return result

   }catch(err){
      console.log(err)
   }
}

function BiggerNameCityAllStates(dataEstado, dataCidade, sort){
   try {
      const nomeCidade = dataCidade.map(cidade => ({Nome: cidade.Nome, uf: cidade.Estado})).sort(sort)[0]
      const Estado = dataEstado.filter(estado => estado.ID === nomeCidade.uf)[0]
   
      return `${nomeCidade.Nome} - ${Estado.Nome} - ${nomeCidade.Nome.length}`
      
   } catch (err) {
      console.log(err)
   }
}

(function render (){

   const dataEstado = JSON.parse(fs.readFileSync("Estados.json", "UTF-8"))
   const dataCidade = JSON.parse(fs.readFileSync("Cidades.json", "UTF-8"))
   
   //criar os 27 json's com as cidades
   // createJson()

   //Mostrar a quantidade de cidades de passando o estado
   // filterQdtCity('AC')

   //Mostrar 5 estados que possuim mais cidades
   console.log(StateWith5BiggerCity(dataEstado, descInForNumbers))
   console.log(StateWith5BiggerCity(dataEstado, ascInForNumbers).reverse())

   //filtar as cidades com maior nome de cada estado
   // console.log(BiggerNameCity(dataEstado, ascInForLenght))
   // console.log(BiggerNameCity(dataEstado, descInForLength))

   //filtar as cidades de marior nome entre todos os estados
   // console.log(BiggerNameCityAllStates(dataEstado, dataCidade, ascInForLenght))
   // console.log(BiggerNameCityAllStates(dataEstado, dataCidade, descInForLength))

})()