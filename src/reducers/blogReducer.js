const blogReducer = (state = [], action) => {
    switch(action.type) {
      case 'NEW_BLOG':
        return state.concat(action.data)
      case 'LIKE': {
        const id = action.data.id
        const blogToChange = state.find(blog => blog.id === id)
        console.log(blogToChange)
        const changedBlog = { 
          content: 
            {...blogToChange.content,
            likes: blogToChange.content.likes + 1
          },
          id: id
        }
        console.log(changedBlog)
        return state.map(blog => 
          blog.id !== id ? blog : changedBlog 
        )
      }
      case 'INIT_BLOGS':
        return action.data
      default:
        return state
    }
  }

//const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const likeButton = (id) => {
  return {
    type: 'LIKE',
    data: {
      content: {
        likes: 1,
      }, 
      id: id
    }
  }
}

export const createBlog = (newBlog) => {
  return {
    type: 'NEW_BLOG',
    data: {
      content: {
        title: newBlog.content.title,
        author: newBlog.content.author,
        content: newBlog.content.content,
        likes: newBlog.content.likes,
      },
      id: newBlog.id
    }
  }
}

export const initializeBlogs = (blogs) => {
  return {
    type: 'INIT_BLOGS',
    data: blogs
  }
}

export default blogReducer