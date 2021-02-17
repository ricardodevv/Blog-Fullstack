const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
<<<<<<< HEAD
    title: {
      type: String,
      required: true,
    },
    date: Date,
    author: String,
    content: String,
    url: String,
    likes: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
=======
    title: String,
    author: String,
    url: String,
    likes: Number
>>>>>>> e617452989c598fbd6efd323aa23ed6c87b56180
  })
  
  blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject._v
    }
  })

module.exports = mongoose.model('Blog', blogSchema)
  

 
