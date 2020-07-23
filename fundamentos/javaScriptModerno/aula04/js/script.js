let globalNames = ['Um', 'Dois', 'Três', 'Quatro']
let inputName = null
let currentIndex
let isEditing = false

window.addEventListener('load', ()=> {
   inputName = document.querySelector('#inputName')

   preventFormSubmit()
   activateInput()
   render()
})


function preventFormSubmit(){

   function handleFormSubmit(event){
   event.preventDefault()//evitar o carregamento da pagina
   }

   var form = document.querySelector('form')
   form.addEventListener('submit', handleFormSubmit)
}

function activateInput(){

   function insertName(newName){
      // globalNames.push(newName)
      globalNames = [...globalNames, newName]
   }

   function updateName(newName){
      globalNames[currentIndex] = newName
   }

   function handleTyping(event){
      var hasText = !!event.target.value && event.target.value.trim() !== ''

      if(!hasText){
         clearInput()
         return
      }

      if(event.key === 'Enter'){
         if(isEditing){
            updateName(event.target.value)
         }else{
            // var typedName = event.target.value //não precisa dessa linha pois esta passando os dados dentro da função
            insertName(event.target.value)
         }
         
         render()
         isEditing = false
         clearInput()
      }
   }

   inputName.addEventListener('keyup', handleTyping)
   inputName.focus()
}

function render(){

   function createDeleteButton(index){

      function deleteButtonName(){
         // globalNames.splice(index, 1)
         // globalNames = globalNames.filter((name, i) => {
         //    if(i===index){
         //       return false
         //    }
         //    return true
         // return i !== index
         // })

         globalNames = globalNames.filter((_, i) => i !== index)

         render()
      }

      var button = document.createElement('button')
      button.classList.add('deleteButton')
      button.textContent = 'X'

      button.addEventListener('click', deleteButtonName)

      return button
   }

   function createSpan(name, index){

      function editItem(){
         inputName.value = name
         inputName.focus()
         isEditing = true
         currentIndex = index
      }

      var span = document.createElement('span')
      span.classList.add('clickble')
      span.textContent = name
      span.addEventListener('click', editItem)

      return span
   }

   var divNames = document.querySelector('#Names')
   divNames.innerHTML = ''

   //Criando ul
   //Fazer numero li's, conforme tamanho do array globalNames
   var ul = document.createElement('ul')

   for(let i = 0; i < globalNames.length; i ++ ){
      var currentName = globalNames[i]

      var li = document.createElement('li')
      var button = createDeleteButton(i)
      var span = createSpan(currentName, i)

      li.appendChild(button)
      li.appendChild(span)
      ul.appendChild(li)
   }

   divNames.appendChild(ul)
   clearInput()
}

// function clearInput(){
//    inputName.value = ''
//    inputName.focus()
// }

const clearInput = () => {
   inputName.value = ''
   inputName.focus()
}