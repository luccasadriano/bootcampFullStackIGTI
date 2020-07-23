/*
SetTimeout -> utilizada para postergar a execução de uma função, tempo de atraso configurado em milissegundos
SetInterval -> semelhante ao setTimeout, mas repete a execução a cada X milissegundos
ClearInterval - > para cancelar o setInterval
*/
window.addEventListener('load', function(){
   const timer = document.querySelector('#timer')
   let  count = 0

   const interval = setInterval(() => {
      timer.textContent = ++count 

      if(count === 10){
         this.clearInterval(interval)
         return
      }

      if(count % 5 === 0){
         setTimeout(()=>{
            timer.textContent = count + ',5'
         }, 500)
      }

   }, 1000)



})