import express from 'express'
import accountsController from '../controllers/accountsController.js'

const router = express()

router.post('/', accountsController.create)

router.get('/findAll', accountsController.findAll)

router.get('/findAgenciaConta', accountsController.findOne)

router.get('/findMedia', accountsController.findMedia)

router.get('/findMenorSaldo', accountsController.findMenorSaldo)

router.get('/findMaiorSaldo', accountsController.findMaiorSaldo)

router.get('/accountsPrivate', accountsController.ttAgenciaNineNine)

router.put('/deposito', accountsController.update)

router.put('/saque', accountsController.updateSaque)

router.put('/transferencia', accountsController.updateTT)

// router.patch('/:id', accountsController.update)

router.delete('/deleteConta', accountsController.remove)

export default router