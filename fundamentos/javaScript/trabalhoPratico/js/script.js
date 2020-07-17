window.addEventListener('load', start)

let inputRed = document.querySelector('#red')
let PrintRed = document.querySelector('#printRed')
let inputGreen = document.querySelector('#green')
let PrintGreen = document.querySelector('#printGreen')
let inputBlue = document.querySelector('#blue')
let PrintBlue = document.querySelector('#printBlue')
let test = document.querySelector('.test')

function start(){
   
   inputRed.addEventListener('mouseup', setValueRange)
   inputGreen.addEventListener('mouseup', setValueRange)
   inputBlue.addEventListener('mouseup', setValueRange)

}

function setValueRange(){

      PrintRed.value = inputRed.value
       r = PrintRed.value

      PrintGreen.value = inputGreen.value
      g = PrintGreen.value

      PrintBlue.value = inputBlue.value
      b = PrintBlue.value

   // console.log(r,g,b)
   test.classList.add('rgb')
   // console.log(test)
   test.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

