//criando o modelo
export default (mongoose) => {
const schema = mongoose.Schema({
   agencia: {
      type: Number,
      required: true,
   },
   conta: {
      type: Number,
      required: true,
   },
   nome: {
      type: String,
      required: true,
   },
   balance: {
      type: Number,
      required: true,
      validate(value){
         if(value < 0)
         throw new Error("Valor negativo para conta não permitido")
      },
      min: 0
   }
})

const accountModel = mongoose.model('account', schema, 'account')

return accountModel
}