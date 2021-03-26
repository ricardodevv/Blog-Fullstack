import React from 'react'

const Blog = ({ blog }) => {
  return (
    <div>
      <h2>{blog.content.title}</h2>
    </div>
  )
}

export default Blog