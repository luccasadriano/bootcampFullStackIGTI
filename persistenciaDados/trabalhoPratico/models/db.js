import dotenv from 'dotenv'
import mongoose from 'mongoose'
import accountsModel from './accountsModel.js'

const db = {}

dotenv.config()

db.url = process.env.MONGO_URL
db.mongoose = mongoose
db.accounts = accountsModel(mongoose)

export default db