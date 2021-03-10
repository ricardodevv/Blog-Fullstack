import React from 'react'
import { createBlog } from '../reducers/blogReducer' 
import { useDispatch } from 'react-redux'
import { eraseState, newBlogMessage } from '../reducers/notificationReducer'

const NewBlog = () => {
  const dispatch = useDispatch()

  const addBlog = (event) => {
    event.preventDefault()
    const title = event.target.blog.value
    event.target.blog.value = ''
    dispatch(createBlog(title))
    dispatch(newBlogMessage(title))
    setTimeout(() => {
      dispatch(eraseState())
    }, 5000)
  }

  return (
    <form onSubmit={addBlog}>
        <input name="blog" />
        <button type="submit">add</button>
    </form>  
  )
}

export default NewBlog
