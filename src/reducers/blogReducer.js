const blogReducer = (state = [], action) => {
    switch(action.type) {
      case 'NEW_BLOG':
        return state.concat(action.data)
      case 'LIKE': {
        const id = action.data.id
        const blogToChange = state.find(blog => blog.id === id)
        const changedBlog = {
          ...blogToChange,
          likes: blogToChange.likes + 1
        }
        return state.map(blog => 
          blog.id !== id ? blog : changedBlog 
        )
      }
      default:
        return state
    }
  }
  
export default blogReducer