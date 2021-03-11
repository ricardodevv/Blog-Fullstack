import './App.css';
import React, { useEffect } from 'react'
import NewBlog from './components/NewBlog'
import Blogs from './components/Blogs' 
import VisibilityFilter from './components/VisibilityFilter'
import { useDispatch } from 'react-redux'
import blogService from './services/blogs'
import { initializeBlogs } from './reducers/blogReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    blogService
      .getAll().then(blogs => dispatch(initializeBlogs(blogs)))
  }, [dispatch])

  return (
    <div className="App">
      <NewBlog />
      <VisibilityFilter />
      <Blogs />
    </div>
  )
}

export default App
