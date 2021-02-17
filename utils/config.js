require('dotenv').config()

<<<<<<< HEAD
let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
  PORT,
  MONGODB_URI,
=======
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
>>>>>>> e617452989c598fbd6efd323aa23ed6c87b56180
}