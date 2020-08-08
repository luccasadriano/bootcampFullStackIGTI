import express from 'express'
import { promises as fs } from 'fs'
import { controleSoma, controleMedia, top3Grade } from '../gradesControle.js'

const { readFile, writeFile } = fs

const router = express.Router()

//POST
router.post("/", async (req, res, next) => {//
   try {
      let grade = req.body

      // if (!grade.student || grade.subject == null || ) {
      //    throw new Error("Os campos Name e Balance são obrigatórios.")
      // }
      const data = JSON.parse(await readFile(global.fileName))

      grade = {
         id: data.nextId++,
         student: grade.student,
         subject: grade.subject,
         type: grade.type,
         value: grade.value,
         timestamp: new Date()
      }
      data.grades.push(grade)

      await writeFile(global.fileName, JSON.stringify(data, null, 2))

      res.send(grade)
   } catch (err) {
      next(err)
   }
})

//GET
router.get("/", async (req, res, next) => {//
   try {

      const data = JSON.parse(await readFile(global.fileName))

      // delete data.nextId

      res.send(data)
   } catch (err) {
      next(err)
   }
})

//GET ID
router.get("/:id", async (req, res, next) => {
   try {

      const data = JSON.parse(await readFile(global.fileName))

      const grade = data.grades.find(grade => grade.id === parseInt(req.params.id))

      // delete data.nextId

      res.send(grade)
   } catch (err) {
      next(err)
   }
})

//DELETE
router.delete("/:id", async (req, res, next) => {
   try {
      const data = JSON.parse(await readFile(global.fileName))

      data.grades = data.grades.filter(
         grade => grade.id !== parseInt(req.params.id))

      await writeFile(global.fileName, JSON.stringify(data, null, 2))

      res.send()
   } catch (err) {
      next(err)
   }
})

//PUT
router.put("/", async (req, res, next) => {
   try {
      const grade = req.body

      // if (!grade.id || !grade.student || !grade.subject || !grade.type || !grade.value == null) {
      //    throw new Error("Os campos Id, student, subject, type e value são obrigatórios.")
      // }

      const data = JSON.parse(await readFile(global.fileName))
      const index = data.grades.findIndex(e => e.id === grade.id)

      if (index === -1) {
         throw new Error("Registro não encontrado.")
      }

      data.grades[index].student = grade.student
      data.grades[index].subject = grade.subject
      data.grades[index].type = grade.type
      data.grades[index].value = grade.value

      await writeFile(global.fileName, JSON.stringify(data, null, 2))

      res.send(grade)
   } catch (err) {
      next(err)
   }
})

//Total e Media dos alunos
router.get("/soma/:student/:subject", async (req, res, next) => {
   try {

      const { student, subject } = req.params

      res.send(await controleSoma(student, subject))
   } catch (err) {
      next(err)
   }
})

router.get("/media/:subject/:type", async (req, res, next) => {
   try {

      const { subject, type } = req.params

      res.send(await controleMedia(subject, type))
   } catch (err) {
      next(err)
   }
})

//top 3 melhores grades
router.get("/top/:subject/:type", async (req, res, next) => {
   try {

      const { subject, type } = req.params

      res.send(await top3Grade(subject, type))
   } catch (err) {
      next(err)
   }
})

router.use((err, req, res, next) => {
   res.status(400).send({ error: err.message })
})

export default router