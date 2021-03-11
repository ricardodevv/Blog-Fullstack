import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { likeButton } from '../reducers/blogReducer'
import { eraseState, likeMessage } from '../reducers/notificationReducer'

const Blogs = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => {
    //Add ascending and descending ordered array 
    if ( state.filter === 'ASCENDING' ) {
      return state.blogs.slice().sort((a, b) => b.likes - a.likes)
    } else if ( state.filter === 'DESCENDING' ) {
      return state.blogs.slice().sort((a, b) => a.likes - b.likes)
    }
    return state.blogs
  })

  const clickLikeButton = (id, title) => {
    dispatch(likeButton(id))
    dispatch(likeMessage(title))
    setTimeout(() => {
      dispatch(eraseState())
    }, 5000)
  }

 //console.log(blogs)

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

   