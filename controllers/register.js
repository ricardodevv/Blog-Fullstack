const Users = require('../models/users')
const registerRouter = require('express').Router()

registerRouter.post('/', async (request, response) => {
  const body = request.body
  
  const userExist = await Users.findOne({ username: body.username })
  
  if (userExist) {
    return response.status(401).json({
      error: 'user already exist'
    })
  }

  response
    .status(200)
    .send({ 
      username: body.username,
      name: body.name, 
      password: body.password
    })
})

module.exports = registerRouter
