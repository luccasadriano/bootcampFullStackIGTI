// Utilizando promise

// window.addEventListener('load', function(){
//    fetch('https://api.github.com/users/luccasadriano').then( res =>{
//       res.json().then(data => {
//          showData(data)
//       })
//    }).catch(erro => {
//       console.log('Erro na requisiçao')
//    })
   
//    executeDivisionPromise()

// })

// function showData(data){
// const user = document.querySelector('#user')
// user.textContent = data.login + '' + data.name
// }

// function divisionPromise(a, b){
//    return new Promise((resolve, reject) =>{
//       if(b ===0){
//          reject('Não é possível dividir por 0')
//       }
//       resolve(a / b)
//    })
// }

// function executeDivisionPromise(){
//       divisionPromise(12, 6).then(result => {
//       console.log(result)
//    })
//    divisionPromise(12, 0).then(result => {
//       console.log(result)
//    }).catch(errorMessage => {
//       console.log(`Falha na divisão; ${errorMessage}`)
//    })
// }

//utilizando sync await

window.addEventListener('load', function(){
   doFetch()
   doFetchAsync()
   executeDivisionPromise()
   executeDivisionPromiseAsyncAwait()
})

function doFetch(){
   fetch('https://api.github.com/users/luccasadriano').then( res =>{
      res.json().then(data => {
         showData(data)
         // console.log(data)
      })
   }).catch(erro => {
      console.log('Erro na requisiçao')
   })
}

async function doFetchAsync(){
   const res = await fetch('https://api.github.com/users/luccasadriano')
   const json = await res.json()
   console.log(json)
}

function showData(data){
const user = document.querySelector('#user')
user.textContent = data.login + '' + data.name
}

function divisionPromise(a, b){
   return new Promise((resolve, reject) =>{
      if(b ===0){
         reject('Não é possível dividir por 0')
      }
      resolve(a / b)
   })
}

function executeDivisionPromise(){
      divisionPromise(12, 6).then(result => {
      console.log(result)
   })
   divisionPromise(12, 0).then(result => {
      console.log(result)
   }).catch(errorMessage => {
      console.log(`Falha na divisão; ${errorMessage}`)
   })
}

async function executeDivisionPromiseAsyncAwait(){
   const division = await divisionPromise(12, 2)
   console.log(division)
}
