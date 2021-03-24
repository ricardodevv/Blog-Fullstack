import React from 'react'
import { useParams } from 'react-router-dom'

const Blog = ({ blogs }) => {
  const id = useParams().id
  const blog = blogs.find(blog => blog.id === Number(id))
  return (
    <div>
      <h2>{blog.content.title}</h2>
    </div>
  )
}

export default Blog