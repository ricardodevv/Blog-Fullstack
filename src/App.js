import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import blogReducer from './reducers/blogReducer'
import { createStore } from 'redux'

const store = createStore(blogReducer)
  
store.dispatch({
  type: 'NEW_BLOG',
  data: {
    title: 'state changes are made with actions',
    author: 'RQ',
    content: 'state changes and how it works',
    likes: 0,
    id: 2
  }
})



const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const App = () => {
  const addBlog = (event) => {
    event.preventDefault()
    const title = event.target.blog.value
    event.target.blog.value = ''
    store.dispatch(createBlog(title))
  }

  const createBlog = (title) => {
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

  const likeButton = (id) => {
    console.log(id)
    store.dispatch({
      type: 'LIKE',
      data: {
        likes: 1,
        id: id
      }
    })
  }

  return (
    <div className="App">
      <form onSubmit={addBlog}>
        <input name="blog" />
        <button type="submit">add</button>
      </form>
      <ul>
        {store.getState().map(blog => 
          <li 
          key={blog.id}
          onClick={() => likeButton(blog.id)} 
          >
            {blog.title}
          
          </li>
        )}
      </ul>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}
  
renderApp()
store.subscribe(renderApp)

export default App
