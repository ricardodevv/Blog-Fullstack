const bcrypt = require('bcrypt')
const User = require('../models/users')
const registerRouter = require('express').Router()

registerRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const userExist = await User.findOne({ username: body.username })

  if (userExist !== null) {
    return (
      response.status(401).json({
        error: 'username already exist'
      })
    )
  } else {
    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    }) 
  
    const savedUser = await user.save()
  
    response.json(savedUser)
  }
})

module.exports = registerRouter
