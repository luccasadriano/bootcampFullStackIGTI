import express from 'express'
import mongoose from 'mongoose'
import studentRouter from './routes/studentRouter.js'

(async () => {
   try {
      await mongoose.connect(
         'mongodb://localhost:27017/grades',{
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      console.log("conectado ao MongoDB")
   } catch (err) {
      console.log(`Erro ao conectar ao MongoDB ${err}`)
   }
})()

const app = express()

app.use(express.json())
app.use("/student", studentRouter)

app.listen(3000, () => {

   try {
      console.log('API Started!')
   } catch (err) {
      console.log(`Erro start API ${err}`)
   }
})