import db from '../models/db.js'

const Account = db.accounts

async function agenciaConta(agencia, conta) {

   const account = { agencia, conta }

   const result = await Account.findOne(account)

   return result
}

async function deposito(agencia, conta, balance) {

   // const account = { agencia, conta }

   const account = await agenciaConta(agencia, conta)

   let newValor = account.balance + balance


   const data = await Account.updateOne({ agencia: account.agencia, conta: account.conta }, { balance: newValor })

   return data
}

async function saque(agencia, conta, saque) {

   // const account = { agencia, conta }

   const account = await agenciaConta(agencia, conta)

   let newValor = account.balance - (saque + 1)


   const data = await Account.updateOne({ agencia: account.agencia, conta: account.conta }, { balance: newValor })

   return data
}

async function removi(agencia, conta) {

   const account = { agencia, conta }

   const result = await Account.findOneAndRemove(account)

   return result
}

async function transferencia(conta1, valorT, conta2) {

   let tarifaTT = 0
   // console.log(conta1, valorT,conta2)

   const result1 = await Account.findOne({conta: conta1})
   const result2 = await Account.findOne({conta: conta2})

   console.log(result1, result2)

   if(conta1.agencia != conta2.agencia ){
      tarifaTT = 8
   }

   let newValorOrigen = result1.balance - (valorT + tarifaTT)
   let newValorDestino = result2.balance + valorT
   
   const data1 = await Account.updateOne({ agencia: result1.agencia, conta: result1.conta }, { balance: newValorOrigen })
   const data2 = await Account.updateOne({ agencia: result2.agencia, conta: result2.conta }, { balance: newValorDestino })

 


   return data1
}


export { agenciaConta, deposito, saque, removi, transferencia}