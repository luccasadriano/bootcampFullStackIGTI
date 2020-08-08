
let globalUser = []
let globalUserFilter = []
let userStatisticAge = []
let userStatisticMale = []
let userStatisticFemale = []
let userStatisticAgeMedia = []

let users = null
let statistic = null
let filter = null


window.addEventListener('load', () => {

   users = document.querySelector('.users')
   statistic = document.querySelector('.statistic')
   filter = document.querySelector('#filter')

//   await 
   doFetch()

})

async function doFetch(){
   const response = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
   const data = await response.json()
   
   // console.log(data)

   allUsers = data.results.map(user => {
     const {login, name, surname, dob, picture, gender} = user
      return {
         login: login.uuid,
         name: name.first,
         surname: name.last,
         picture: picture.large,
         age: dob.age,
         gender: gender
      }
   })
   
   globalUser = allUsers

   // console.log(allUsers)
   render()
}

function render(){
   
   filterUser()
   // showStatistic()
   // renderUser()
}

function renderUser(){

   filter.textContent = `${globalUserFilter.length} usuário(s) encontrado(s)`

   let usersHTML = '<div>'

   globalUserFilter.forEach(user => {
      const {name, surname, age, picture, gender} = user

      const userHTML = `
      <div class="userss">
      <img src="${picture}" alt="${name}">
      </div>
      <div>
      <p>${name} ${surname}, ${age}</p>
      </div>
      `
      usersHTML += userHTML
   })

   usersHTML += '</div>'

   users.innerHTML = usersHTML
}

function filterUser(){
   
   const inputFilter = document.querySelector('#inputFilter')
   inputFilter.addEventListener('keyup', handleFilterKeyup)

   const buttonFilter = document.querySelector('#buttonFilter')
   buttonFilter.addEventListener('click' , handleFilterClick)
   
   function handleFilterKeyup(event){
      const {key} = event
      if(key !== 'Enter'){
         return
      }
      handleFilterClick()
   }

   function handleFilterClick(){
      
      const filterValue = inputFilter.value.trim().toLowerCase()

      globalUserFilter = allUsers.filter((item) => {
         return item.name.toLowerCase().includes(filterValue) || item.surname.toLowerCase().includes(filterValue)
      })

      console.log(globalUserFilter)
      renderUser()
      showStatistic()
      // renderStatistic()
   }
   inputFilter.focus()
}

   function showStatistic(){

      title = document.querySelector('#title')
      title.textContent = 'Estatísticas'
      
      userStatisticFemale = globalUserFilter.filter(e => e.gender === 'female').length

      userStatisticMale = globalUserFilter.filter(e => e.gender === 'male').length
      
      userStatisticAge = globalUserFilter.reduce((accumulator, current) => {
         return accumulator + current.age
      }, 0)

      userStatisticAgeMedia = (userStatisticAge / globalUserFilter.length).toFixed(2)

      const statistic = document.querySelector('#statistic')

      statistic.innerHTML = ''
      var ul = document.createElement('ul')
      var liF = document.createElement('li')
      var liM = document.createElement('li')
      var liA = document.createElement('li')
      var liAm = document.createElement('li')
      ul.appendChild(liF)
      ul.appendChild(liM)
      ul.appendChild(liA)
      ul.appendChild(liAm)

      statistic.appendChild(ul)

      liF.textContent = `Sexo masculino: ${userStatisticMale}`
      liM.textContent = `Sexo feminino: ${ userStatisticFemale}`
      liA.textContent = `Soma das idades: ${userStatisticAge}`
      liAm.textContent = `Média das idades: ${userStatisticAgeMedia}`


      console.log(userStatisticFemale,userStatisticMale,userStatisticAge, userStatisticAgeMedia)
}
