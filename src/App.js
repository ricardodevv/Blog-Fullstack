import './App.css';
import React from 'react'
import NewBlog from './components/NewBlog'
import Blogs from './components/Blogs' 

const App = () => {
  return (
    <div className="App">
      <NewBlog />
      <Blogs />
    </div>
  )
}

export default App
