import './App.css';
import React from 'react'
import NewBlog from './components/NewBlog'
import Blogs from './components/Blogs' 
import VisibilityFilter from './components/VisibilityFilter'

const App = () => {
  return (
    <div className="App">
      <NewBlog />
      <VisibilityFilter />
      <Blogs />
    </div>
  )
}

export default App
