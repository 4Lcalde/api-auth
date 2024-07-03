require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/CONFIG/db')
const userRoutes = require('./src/API/ROUTES/user')

const app = express()

//!Con esto se es capaz de interpretar datos que envio al servido en formato json
app.use(express.json())

connectDB()
app.use('/api/v1/users', userRoutes)

app.use('*', (req, res, next) => {
  return res.status(400).json('Route not found')
})

app.listen(3000, () => {
  console.log('El servido está funcionando en http://localhost:3000')
})
