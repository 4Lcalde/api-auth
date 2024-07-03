// ES UNA FUNCION QUE VA ANTES DE LA RUTA Y LA FUNCION FUNAL

const User = require('../API/MODELS/user')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return res.status(400).json('No estás autorizado')
    }

    const parsedToken = token.replace('Bearer ', '')
    const { id } = verifyJwt(parsedToken)
    const user = await User.findById(id)

    user.password = null
    req.user = user
    next()
  } catch (error) {
    return res.status(400).json('No estás autorizado')
  }
}

const isPaquito = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return res.status(400).json('No estás autorizado')
    }

    const parsedToken = token.replace('Bearer ', '')
    const { id } = verifyJwt(parsedToken)
    const user = await User.findById(id)

    if (user.userName === 'Aitor') {
      user.password = null
      req.user = user
      next()
    } else {
      return res.status(400).json('No eres Paquito')
    }
  } catch (error) {
    return res.status(400).json('No estás autorizado')
  }
}

const verifyJwt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = { isAuth, verifyJwt, isPaquito }
