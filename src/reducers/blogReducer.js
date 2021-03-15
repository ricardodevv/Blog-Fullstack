import blogService from '../services/blogs'

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

export const likeButton = (liked, id) => {
  return async dispatch => {
    const like = await blogService.updateBlog(liked, id)
    dispatch({
      type: 'LIKE',
      data: like
    })
  } 
}

export const createBlog = (content) => {
  return async dispatch => {
    const blogToAdd = await blogService.createNew(content)
    dispatch({
      type: 'NEW_BLOG',
      data: blogToAdd
    })
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export default blogReducer