const logger = require('./logger')

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Body:  ', request.body)
  logger.info('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
<<<<<<< HEAD
  if (error.name === 'CastError') {
    return response.status(400).send({ 
      error: 'malformatted id' 
    })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ 
      error: error.message 
    })
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({
      error:'invalid token'
    })
  }
  logger.error(error.message)
=======
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
>>>>>>> e617452989c598fbd6efd323aa23ed6c87b56180

  next(error)
}

<<<<<<< HEAD
const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    request.token = authorization.substring(7)
  } else {
    request.token = null 
  }
  next()
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  tokenExtractor
=======
module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
>>>>>>> e617452989c598fbd6efd323aa23ed6c87b56180
}