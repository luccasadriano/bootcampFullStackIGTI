import express from 'express'
import studentModel from '../models/studentModel.js'

const studentRouter = express()

studentRouter.post('/', async (req, res) => {
   try {
      const student = new studentModel(req.body)
      await student.save()
      res.send(student)
   } catch (err) {
      res.status(500).send(`Error create student ${err}`)
   }
})

studentRouter.get('/', async (req, res) => {
   try {
      const student = await studentModel.find({})
      res.send(student)
   } catch (err) {
      res.status(500).send(`Erro find student ${err}`)

   }
})

studentRouter.put('/:id', async (req, res) => {
   try {
      const id = req.params.id
      const student = await studentModel.findByIdAndUpdate({ _id: id }, req.body, {
         new: true
      })
      res.send(student)
   } catch (err) {
      res.status(500).send(`Error update student ${err}`)
   }
})

studentRouter.patch('/:id', async (req, res) => {
   try {
      const id = req.params.id
      const student = await studentModel.findByIdAndUpdate({ _id: id }, req.body, {
         new: true
      })
      res.send(student)
   } catch (err) {
      res.status(500).send(`Error update student ${err}`)
   }
})

studentRouter.delete('/:id', async (req, res) => {
   try {

      const student = await studentModel.findByIdAndDelete({ _id: req.params.id })
      if (!student) {
         res.status(404).send("Documento não foi encontrado na coleção")
      } else {
         res.status(200).send(200)
      }
   } catch (err) {
      res.status(500).send(`Erro delete student ${err}`)

   }
})

export default studentRouter