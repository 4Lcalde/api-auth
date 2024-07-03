const { isAuth, isPaquito } = require('../../MIDDLEWARES/out')
const { register, login, deleteUser, getUsers } = require('../CONTROLLERS/user')

const userRoutes = require('express').Router()

userRoutes.get('/', getUsers)
userRoutes.post('/register', register)
userRoutes.post('/login', login)
//Con los corchetes ejecuto el middlelware, em este caso, se verifica si hay token, y si no se detiene la funcion
userRoutes.delete('/:id', [isPaquito], deleteUser)

module.exports = userRoutes
