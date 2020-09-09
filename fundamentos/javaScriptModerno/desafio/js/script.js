let globalUser = []
let globalUserFilter = []
let userStatisticAge = []
let userStatisticMale = []
let userStatisticFemale = []
let userStatisticAgeMedia = []

let users = null
let statistic = null
let filter = null
let divSpinner = null
let divInteraction = null

window.addEventListener('load', () => {

   users = document.querySelector('.users')
   statistic = document.querySelector('.statistic')
   filter = document.querySelector('#filter')

   divInteraction = document.querySelector('#divInteraction')
   divSpinner = document.querySelector('#divSpinner')


   doFetch()
})

async function doFetch() {
   const response = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
   const data = await response.json()

   allUsers = data.results.map(user => {
      const { login, name, surname, dob, picture, gender } = user
      // const fullName = `${name.first} ${name.last}`
      return {
         login: login.uuid,
         name: name.first,
         surname: name.last,
         picture: picture.large,
         age: dob.age,
         gender: gender
      }
   })
   .sort((a, b) => {
      return a.name.localeCompare(b.name)
   })//ordenar pelo nome

   globalUser = allUsers

   showInteraction()

   render()
}

function showInteraction(){//colocar o load e retira passando aquela sensação
   setTimeout(()=>{
      divSpinner.classList.add('hidden')
      divInteraction.classList.remove('hidden')
   }, 2000)
}

function render() {

   filterUser()
}

function renderUser() {

   filter.textContent = `${globalUserFilter.length} usuário(s) encontrado(s)`

   let usersHTML = '<div>'

   globalUserFilter.forEach(user => {
      const { name, surname, age, picture, gender } = user

      const userHTML = `
      <div class="userss">
      <img class='avatar' src="${picture}" alt="${name}">
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

function filterUser() {

   const inputFilter = document.querySelector('#inputFilter')
   inputFilter.addEventListener('keyup', handleFilterKeyup)

   const buttonFilter = document.querySelector('#buttonFilter')
   buttonFilter.addEventListener('click', handleFilterClick)

   function handleFilterKeyup(event) {
      const { key } = event
      if (key !== 'Enter') {
         return
      }
      handleFilterClick()
   }

   function handleFilterClick() {

      const filterValue = inputFilter.value.trim().toLowerCase()

      globalUserFilter = allUsers.filter((item) => {
         return item.name.toLowerCase().includes(filterValue) || item.surname.toLowerCase().includes(filterValue)
      })

      console.log(globalUserFilter)
      renderUser()
      showStatistic()
   }
   inputFilter.focus()
}

function showStatistic() {

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
   liM.textContent = `Sexo feminino: ${userStatisticFemale}`
   liA.textContent = `Soma das idades: ${userStatisticAge}`
   liAm.textContent = `Média das idades: ${userStatisticAgeMedia}`


   console.log(userStatisticFemale, userStatisticMale, userStatisticAge, userStatisticAgeMedia)
}
