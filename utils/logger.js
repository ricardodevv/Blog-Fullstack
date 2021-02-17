const info = (...params) => {
<<<<<<< HEAD
  if (process.env.NODE_ENV !== 'test') {
    console.log(...params)
  }
=======
  console.log(...params)   
>>>>>>> e617452989c598fbd6efd323aa23ed6c87b56180
}

const error = (...params) => {
  console.error(...params)
}

module.exports = {
  info,
  error
}
