import React from 'react'
import { createBlog } from '../reducers/blogReducer' 
import { useDispatch } from 'react-redux'
import { eraseState, newBlogMessage } from '../reducers/notificationReducer'
import blogService from '../services/blogs'

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
    //dispatch(createBlog(title))
    const newBlog = await blogService.createNew(content)
    console.log(newBlog, 'newBlog')
    dispatch(createBlog(newBlog))
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
