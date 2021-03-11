import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css'
import App from './App'
import Notification from './components/Notification'

import blogReducer, { initializeBlogs } from './reducers/blogReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

import blogService from './services/blogs'

const reducer = combineReducers({
  blogs: blogReducer,
  filter: filterReducer,
  notification: notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Notification />
    <App />
  </Provider>,
  document.getElementById('root')
)
