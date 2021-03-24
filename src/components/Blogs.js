import React from 'react'
import { useDispatch } from 'react-redux'
import { likeButton } from '../reducers/blogReducer'
import { eraseState, likeMessage } from '../reducers/notificationReducer'
import { Link } from 'react-router-dom'

const Blogs = ({ blogs }) => {
  const dispatch = useDispatch()

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
          <Link to={`/blogs/${blog.id}`}>{blog.content.title}</Link>
          {blog.content.likes}
        </li>
      )}
    </ul>
  )
} 



export default Blogs

   