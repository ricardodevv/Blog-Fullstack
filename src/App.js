import './App.css';
import React, { useEffect } from 'react'
import NewBlog from './components/NewBlog'
import Blogs from './components/Blogs' 
import Blog from './components/Blog'
import VisibilityFilter from './components/VisibilityFilter'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { Switch, Route, Link } from "react-router-dom"


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  const blogs = useSelector(state => {
    //Add ascending and descending ordered array 
    if ( state.filter === 'ASCENDING' ) {
      return state.blogs.slice().sort((a, b) => b.content.likes - a.content.likes)
    } else if ( state.filter === 'DESCENDING' ) {
      return state.blogs.slice().sort((a, b) => a.content.likes - b.content.likes)
    }
    return state.blogs
  })

  const padding = {
    padding: 5
  }

  const Home = () => {
    return (
      <h1>Blogs site with react and redux</h1>
    )
  }

  return (
    <div className="App">
      <div>
        <Link style={padding} to="/">Home</Link>
        <Link style={padding} to="/blogs">Blogs</Link>
      </div>
  
      <Switch>
        <Route path="/blogs/:id">
          <Blog blogs={blogs}/>
        </Route>
        <Route path="/blogs">
          <Blogs blogs={blogs}/>
          <VisibilityFilter />
        </Route>
        <Route path="/newBlog">
          <NewBlog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
