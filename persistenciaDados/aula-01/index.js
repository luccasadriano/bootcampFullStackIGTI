import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://luccas:Karate@non-relational-database.tkwnf.gcp.mongodb.net/igti?retryWrites=true&w=majority", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(
   console.log("Conectado ao Mongo DB Atlas")
).catch((err) => { console.log(`Conectado ao Mongo DB Atlas ${err}`)})