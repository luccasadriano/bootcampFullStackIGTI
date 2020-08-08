import {promises as fs } from "fs"

//utilizando promise assincrona async/await
async function init(){
   try{
      await fs.writeFile("teste.txt", "bla bla blaa..")
      await fs.appendFile("teste.txt", " \nteste append file") 
      const data = await fs.readFile("teste.txt", "utf-8")
      console.log(data)
   }catch(err){
         console.log(err)         
   }
}
init()

async function writeReadJson(){
   //valores iniciais
   const arrayCarro = ["Gol", "Palio", "Corsa", "celta", "uno"]
   const obj = {
      carros: arrayCarro
   }
   try {
      //escrita com valores
      await fs.writeFile("teste.json", JSON.stringify(obj))// JSON.stringify convertendo objeto para json
      
      //fez a leitura
      const car = await fs.readFile("teste.json")

      // const car = JSON.parse(await fs.readFile("teste.json"))
      console.log(JSON.parse(car))// JSON.parse convertendo para json sem utilizar o utf-8

      //modificou o conteudo
      data.carros.push("fusca")

      //sobrescrevemos o arquivo modificado
      await fs.writeFile("teste.json", JSON.stringify(data))

   } catch (err) {
      console.log(err)
   }
}
writeReadJson()

// //utilizando promise
// fs.writeFile("teste.txt", "bla bla blaa..").then(() =>{
//    fs.appendFile("teste.txt", " \nteste append file").then(() =>{
//       fs.readFile("teste.txt", "utf-8").then(resp =>{
//          console.log(resp)
//       }).catch(err => {
//          console.log(err)
//       })
//    }).catch(err => {
//       console.log(err)
//    })
// }).catch(err => {
//    console.log(err)
// })

// //utilizando callback
// fs.writeFile("teste.txt", "bla bla blaa..", function(err){
//    if(err){
//       console.log(err)
//    }else{
//       fs.appendFile("teste.txt", " \nteste append file", function(err){
//          if(err){
//             console.log(err)
//          }else{
//             fs.readFile("teste.txt", "utf-8", (err, data) => {
//                if(err){
//                   console.log(err)
//                }else{
//                   console.log(data)
//                }
//             })
//          }
//       })
//    }
// })

// //utilizando de forma sincrona
// try{
//    console.log("1")
//    fs.writeFile("teste.txt", "bla bla blaa..")
//    console.log("2")
//    const data = fs.readFile("teste.txt", "utf-8")
//    console.log(data)
//    console.log("3")
// }catch(err){
//    console.log(err)
// }