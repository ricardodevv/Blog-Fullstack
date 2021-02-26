import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import blogReducer from './reducers/blogReducer'
import { createStore } from 'redux'

const store = createStore(blogReducer)

store.dispatch({
  type: 'NEW_BLOG',
  data: {
    title: 'the app state is in redux store',
    author: 'RQ',
    content: 'about the app in redux store',
    likes: 0,
    id: 1
  }
})
  
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

store.dispatch({
  type: 'LIKE',
  data: {
    likes: 1,
    id: 2 
  }
})

const App = () => {
  return (
    <div className="App">
      <ul>
        {store.getState().map(blog => 
          <li key={blog.id}>
            {blog.title}
          </li>
        )}
      </ul>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<NewBlog />, document.getElementById('root'))
}
  
renderApp()
store.subscribe(renderApp)

export default App
