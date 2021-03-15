import './App.css';
import React, { useEffect } from 'react'
import NewBlog from './components/NewBlog'
import Blogs from './components/Blogs' 
import VisibilityFilter from './components/VisibilityFilter'
import { useDispatch } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeBlogs())
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
