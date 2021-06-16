/*eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux'
import { likeButton } from '../reducers/blogReducer'
import { eraseState, likeMessage } from '../reducers/notificationReducer'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

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
    <div>
      <h2>Blogs</h2>
      <Table striped>
        <tbody>
          {blogs.map(blog =>
            <tr 
              key={blog.id}
            >
              <td>
                <Link to={`/blogs/${blog.id}`}>
                  {blog.content.title}
                </Link>
              </td>
              <td>
                {blog.content.likes}
                <button onClick={() => clickLikeButton(blog.id, blog.content.title)}>Like</button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
} 



export default Blogs

   