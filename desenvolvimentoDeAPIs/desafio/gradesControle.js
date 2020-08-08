import { promises as fs } from 'fs'
import calculo from './libs/calculos.js'

const { readFile } = fs

async function controleSoma(aluno, materia) {

   const data = JSON.parse(await readFile(global.fileName))

   let grades = data.grades.filter(grade => {
      return grade.student.toLowerCase() === aluno.toLowerCase() && grade.subject.toLowerCase() === materia.toLowerCase()
   })

   grades = grades.map(grade => {
      return grade.value
   })

   return { Total: calculo.soma(grades)}
}


async function controleMedia(materia, tipo) {

   const data = JSON.parse(await readFile(global.fileName))

   let grades = data.grades.filter(grade => {
      return grade.subject.toLowerCase() === materia.toLowerCase() && grade.type.toLowerCase() === tipo.toLowerCase()
   })

   grades = grades.map(grade => {
      return grade.value
   })

   return { Media: calculo.media(grades) }
}

async function top3Grade(materia, tipo) {

   const desc = (a, b) => b - a

   const data = JSON.parse(await readFile(global.fileName))

   let top3grades = data.grades.filter(grade => {
      return grade.subject.toLowerCase() === materia.toLowerCase() && grade.type.toLowerCase() === tipo.toLowerCase()
   })
   

   top3grades = top3grades.map(grade => {
      return grade.value
   }).sort(desc)

   console.log(top3grades)

   const result = top3grades.slice(0, 3)

   return { Top3: result }
}

export { controleSoma, controleMedia, top3Grade }