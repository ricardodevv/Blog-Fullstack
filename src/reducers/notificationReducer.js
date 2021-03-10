const notificationReducer = (state = [], action) => {
  if (action.type === 'NEW_BLOG_MESSAGE') {
    return state.concat(action.data)
  } else if (action.type === 'LIKE_MESSAGE') {
    return state.concat('You liked ' + action.data)
  } else if (action.type === 'CLOSE_MESSAGE') {
    return state.splice(2)
  }
  return state
}

export const eraseState = () => {
  return {
    type: 'CLOSE_MESSAGE'
  }
}

export const newBlogMessage = (title) => {
  console.log(title)
  return {
    type: 'NEW_BLOG_MESSAGE',
    data: title
  }
}

export const likeMessage = (blogTitle) => {
  return {
    type: 'LIKE_MESSAGE',
    data: blogTitle
  }
}

export default notificationReducer