import React from 'react'
import { createBlog } from '../reducers/blogReducer' 
import { useDispatch } from 'react-redux'
import { eraseState } from '../reducers/notificationReducer'

const NewBlog = () => {
  const dispatch = useDispatch()

  const addBlog = async (event) => {
    event.preventDefault()
    const content = {
      title: event.target.blog.value,
      author: 'RQ',
      content: 'about the app in redux store',
      likes: 0,
    }
    event.target.blog.value = ''
    dispatch(createBlog(content))
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
