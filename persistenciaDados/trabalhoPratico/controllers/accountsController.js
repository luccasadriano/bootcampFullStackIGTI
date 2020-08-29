import db from '../models/db.js'

const Account = db.accounts

const create = async (req, res) => {
   const { agencia, conta, nome, balance } = req.body

   const account = new Account({
      agencia: agencia,
      conta: conta,
      nome: nome,
      balance: balance
   });

   try {
      const data = await account.save()

      res.send(data)
      
   } catch (err) {

      res.status(500).send(`Erro create account ${err}`)
   }
}

const findAll = async (req, res) => {
   try {

      const data = await Account.find()

      res.send(data)

   } catch (err) {

      res.status(500).send(`Erro findAll account ${err}`)

   }
}


const findOne = async (req, res) => {
   const id = req.params.id

   try {

      const data = await Account.findById({_id: id})

      if (!data) {
         res.status(404).send(`Conta não encontrado ${id}`)
      } else {
         res.status(200).send(data)
      }

   } catch (err) {

      res.status(500).send(`Erro findOne account ${id} ${err}`)

   }
}

const update = async (req, res) => {
   const id = req.params.id

   try {

      const data = await Account.findByIdAndUpdate({ _id: id }, req.body, {
         new: true
      })

      if (!data) {
         res.status(404).send(`Conta não encontrado ${id}`)
      } else {
         res.status(200).send(data)
      }

   } catch (err) {

      res.status(500).send(`Error update account ${id} ${err}`)
   }
}

const remove = async (req, res) => {
   const id = req.params.id

   try {

      const data = await Account.findByIdAndDelete({ _id: req.params.id })

      if (!data) {
         res.status(404).send(`Conta não encontrada ${id} ${err}` )
      } else {
         res.status(200).send(200)
      }
   } catch (err) {
      res.status(500).send(`Erro delete account ${id} ${err}`)

   }
}

export default { create, findAll, findOne, update,  remove}

