import React from 'react'
import { useParams } from 'react-router-dom'

const Blog = ({ blog }) => {
  return (
    <div>
      <h2>{blog.content.title}</h2>
    </div>
  )
}

export default Blog