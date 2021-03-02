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

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const likeButton = (id) => {
  console.log(id)
  return {
    type: 'LIKE',
    data: {
      likes: 1,
      id: id
    }
  }
}

export const createBlog = (title) => {
  return {
    type: 'NEW_BLOG',
    data: {
      title,
      author: 'RQ',
      content: 'about the app in redux store',
      likes: 0,
      id: generateId()
    }
  }
}

export default blogReducer