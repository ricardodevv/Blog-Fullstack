import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { likeButton } from '../reducers/blogReducer'
import { eraseState, likeMessage } from '../reducers/notificationReducer'

const Blogs = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => {
    //Add ascending and descending ordered array 
    if ( state.filter === 'ASCENDING' ) {
      return state.blogs.slice().sort((a, b) => b.content.likes - a.content.likes)
    } else if ( state.filter === 'DESCENDING' ) {
      return state.blogs.slice().sort((a, b) => a.content.likes - b.content.likes)
    }
    return state.blogs
  })
  console.log(blogs)

  const clickLikeButton = (id, title) => {
    const blog = blogs.find(blog => blog.id === id)
    console.log(blog)
    const likedButton = {
      content: {
        ...blog.content,
        likes: blog.content.likes + 1,
      }, 
      id: id
    }
    dispatch(likeButton(likedButton, id))
    dispatch(likeMessage(title))
    setTimeout(() => {
      dispatch(eraseState())
    }, 5000)
  }

  return (
    <ul>
      {blogs.map(blog =>
        <li 
          key={blog.id}
          onClick={() => clickLikeButton(blog.id, blog.content.title)} 
        >
          {blog.content.title}
          {blog.content.likes}
        </li>
      )}
    </ul>
  )
} 

export default Blogs

   