import db from '../models/db.js'
import { agenciaConta, deposito, saque, removi, transferencia } from './filtros.js'

const Account = db.accounts

const create = async (req, res) => {
   const { agencia, conta, name, balance } = req.body

   const account = new Account({
      agencia: agencia,
      conta: conta,
      name: name,
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

//.6
const findOne = async (req, res) => {
   const { agencia, conta } = req.body

   try {

      const data = await agenciaConta(agencia, conta)

      if (!data) {
         res.status(404).send(`Agencia ${agencia} ou Conta ${conta} não encontrada não encontrado`)
      } else {
         res.status(200).send(data)
      }

   } catch (err) {

      res.status(500).send(`Erro find account ${err}`)
   }
}
// .4
const update = async (req, res) => {
   const { id, agencia, conta, balance } = req.body

   try {
      const depositar = await deposito(agencia, conta, balance)

      const data = await agenciaConta(agencia, conta)

      // const data = await Account.updateOne({ agencia: find.agencia, conta: find.conta }, { balance: balance })

      if (!data) {
         res.status(404).send(`Agencia ${agencia} ou Conta ${conta} não encontrada não encontrado`)
      } else {
         res.status(200).send(data)
      }

   } catch (err) {

      res.status(500).send(`Error update account ${err}`)
   }
}
//.5
const updateSaque = async (req, res) => {
   const { id, agencia, conta, balance } = req.body

   try {
      const depositar = await saque(agencia, conta, balance)

      const data = await agenciaConta(agencia, conta)

      // const data = await Account.updateOne({ agencia: find.agencia, conta: find.conta }, { balance: balance })

      if (!data) {
         res.status(404).send(`Agencia ${agencia} ou Conta ${conta} não encontrada não encontrado`)
      } else {
         res.status(200).send(data)
      }

   } catch (err) {

      res.status(500).send(`Error update account ${err}`)
   }
}
//.8 não esquecer de colocar o 8 reais de tarifa
const updateTT = async (req, res) => {
   const { agencia, contaOrigem, contaDestino, balance } = req.body

   try {
      const tt = await transferencia(contaOrigem, balance, contaDestino)

      const data = await Account.findOne({ conta: contaOrigem })

      if (!data) {
         res.status(404).send(`Conta ${contaOrigem} não encontrada não encontrado`)
      } else {
         res.status(200).send(data)
      }

   } catch (err) {

      res.status(500).send(`Error ${err}`)
   }
}

//.7 não esquece de colocar o retorno da quantidade de agencia disponivel depois do delete
const remove = async (req, res) => {
   const { agencia, conta } = req.body

   try {

      const data = await removi(agencia, conta)

      if (!data) {
         res.status(404).send(`Conta ${conta} não encontrada ${err}`)
      } else {
         res.status(200).send(200)
      }
   } catch (err) {
      res.status(500).send(`Erro delete account ${err}`)

   }
}
//.9
const findMedia = async (req, res) => {
   const agencia = req.body

   try {
      const averageBalance = await Account.aggregate([
         { $group: { _id: '$agencia', media: { $avg: '$balance' } } },
      ])

      // const averageBalance = await Account.aggregate([
      //    { $group: { _id: null, maxBalance: { $max: '$balance' } } },
      //    { $project: { _id: 0, maxBalance: 1 } }
      // ])

      console.log(averageBalance)

      if (averageBalance.length === 0) {
         throw new Error("agencia não encontrada");
      }

      res.send(averageBalance);
   } catch (err) {
      res.status(500).send(`Erro ${err}`)
   }
}

const findMenorSaldo = async (req, res) => {
   const {limit, order} = req.body

   try {

      const topBalance = await Account.find({}).limit(limit).sort(order);
      if (topBalance.length === 0) {
        throw new Error("Nenhum cliente encontrado");
      }
      res.send(topBalance);
   } catch (err) {
      res.status(500).send(`Erro ${err}`)
   }
}

const findMaiorSaldo = async (req, res) => {
   const {limit, order} = req.body

   try {

      const topRicher = await Account.find({}).limit(limit).sort(order);
      if (topRicher.length === 0) {
        throw new Error("Nenhum cliente encontrado");
      }
      res.send(topRicher);

      // const averageBalance = await Account.aggregate([
      //    { $group: { _id: null, maxBalance: { $max: '$balance' } } },
      //    { $project: { _id: 0, maxBalance: 1 } }
      // ])

   } catch (err) {
      res.status(500).send(`Erro ${err}`)
   }
}

const ttAgenciaNineNine = async (req, res) =>{
   const {agencia, balance} = req.body

   try {
      let transferToPrivates = await Account.aggregate([
        {
          $group: {
            _id: "$agencia",
            balance: { $max: "$balance" },
          },
        },
      ])
      /*if (transferToPrivates.length === 0) {
        throw new Error("nenhuma conta apta para agencia Private");
      }*/
      for (const transferToPrivate of transferToPrivates) {
        const { _id, balance } = transferToPrivate;
        let newAccounts = await Account.findOne({
          agencia: _id,
          balance,
        });
        newAccounts.agencia = 99
        await newAccounts.save()
      }
      transferToPrivates = await Account.find({
          agencia: 99
      });
      res.send(transferToPrivates)

   } catch (err) {
      res.status(500).send(`Erro ${err}`)
   }
}

export default { create, findAll, findOne, findMedia, findMenorSaldo, findMaiorSaldo, update, updateSaque, updateTT, remove, ttAgenciaNineNine}

