window.addEventListener('load', start)

const clickArray = []

function start(){
   const button = document.querySelector('#clickButton')
   button.addEventListener('click', handleButtonClick)

   console.log("DOM carregado!")
}

function handleButtonClick(){
   const item = geNewTimeStamp()
   clickArray.push(item)

   render(item)
}

function render(item){
   const ul = document.querySelector('#data')

   const li = document.createElement('li')
   li.textContent = item

   ul.appendChild(li)//inserindo o filho li no pai ul

   // ul.innerHTML = ''

   // let lis =''

   // clickArray.map((item) => {
   // lis += `<li>${item}</li>`
   // })

   // ul.innerHTML = lis

   document.title = clickArray.length
}