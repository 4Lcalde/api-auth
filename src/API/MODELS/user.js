const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { type } = require('os')

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true, collection: 'users' }
)

//Con pre ejecuto lo que quiero antes de que se realice una acción. en este caso se encripta antes de guardar el usuario
userSchema.pre('save', function () {
  //esta linea es la que encripta la contraseña
  this.password = bcrypt.hashSync(this.password, 10)
})

const User = mongoose.model('users', userSchema, 'users')
module.exports = User
