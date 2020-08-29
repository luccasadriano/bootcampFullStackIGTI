import express from 'express'
import accountsController from '../controllers/accountsController.js'

const router = express()

router.post('/', accountsController.create)

router.get('/', accountsController.findAll)

router.get('/:id', accountsController.findOne)

router.put('/:id', accountsController.update)

router.patch('/:id', accountsController.update)

router.delete('/:id', accountsController.remove)

export default router