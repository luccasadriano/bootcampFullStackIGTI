window.addEventListener('load', start)

const clickArray = []

function start(){
   const button = document.querySelector('#clickButton')
   button.addEventListener('click', handleButtonClick)

   console.log("DOM carregado!")
}

function handleButtonClick(){
   clickArray.push(geNewTimeStamp())
   console.log(clickArray)
   render()
}

function render(){
   const ul = document.querySelector('#data')
   ul.innerHTML = ''

   let lis =''

   clickArray.map((item) => {
   lis += `<li>${item}</li>`
   })

   ul.innerHTML = lis
   document.title = clickArray.length
}