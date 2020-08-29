import express from 'express'
import db from './models/db.js'
import router from './routes/router.js'

(async () => {
   try {
      await db.mongoose.connect(db.url, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false,
         useCreateIndex: true,
      })
      console.log("conectado ao MongoDB com sucesso")
   } catch (err) {
      console.log(`Erro ao conectar ao MongoDB ${err}`)
   }
})()

const app = express()

app.use(express.json())
app.use("/account", router)

app.listen(process.env.PORT, () => {
   try {
      console.log('API Started!')
   } catch (err) {
      console.log(`Erro start API ${err}`)
   }
})