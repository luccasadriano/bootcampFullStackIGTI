function media(valor) {
   const sum = soma(valor)
   const media = sum / valor.length
   return media
}

function soma(valor) {
   const sum = valor.reduce((accumulator, current) => {
      return accumulator + current
   }, 0)
   return sum
}

export default { media, soma }