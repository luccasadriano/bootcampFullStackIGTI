window.addEventListener('load', start)

function start(){
   console.log('Teste')
   console.log('Página totalmente carregada')

   var nameInput = document.querySelector('#nameInput')//pegando o input utilizando o dom
   nameInput.addEventListener('keyup', countName)//utilizando o event

   var form = document.querySelector('form')//SPA's(Single Page Applications) fazendo o carregamento na mesma pagina
   form.addEventListener('submit', preventSubmi)
}

function countName(event){
   // console.log(event)
   var count = event.target.value

   var span = document.querySelector('#nameLength')
   span.textContent = count.length
}

function preventSubmi(event){
   event.preventDefault()//evitar o carregamento da pagina

   var nameInput = document.querySelector('#nameInput')
   alert(nameInput.value + ' Cadastrado com sucesso!')
}