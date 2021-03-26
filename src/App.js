import './App.css';
import React, { useEffect, useState } from 'react'
import NewBlog from './components/NewBlog'
import Blogs from './components/Blogs' 
import Blog from './components/Blog'
import Login from './components/Login'
import Users from './components/User'
import Home from './components/Home'
import VisibilityFilter from './components/VisibilityFilter'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { Switch, Route, Link, Redirect, useRouteMatch } from "react-router-dom"

const App = () => {
  const [user, setUser] = useState(null)

  const login = (user) => {
    setUser(user)
  }

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

  const match = useRouteMatch('/blogs/:id')
  console.log(typeof(match))
  const blog = match
    ? blogs.find(blog => blog.id === Number(match.params.id))
    : null

  return (
    <div className="App">
      <div>
        <Link style={padding} to="/">Home</Link>
        <Link style={padding} to="/blogs">Blogs</Link>
        <Link style={padding} to="/users">Users</Link>
        {user 
        ? <em>{user} logged in</em>
        : <Link style={padding} to="/login">login</Link>
        }
      </div>
  
      <Switch>
        <Route path="/blogs/:id">
          <Blog blog={blog}/>
        </Route>
        <Route path="/blogs">
          <Blogs blogs={blogs}/>
          <VisibilityFilter />
        </Route>
        <Route path="/newBlog">
          <NewBlog />
        </Route>
        <Route path="/users">
          {user 
            ? <Users /> 
            : <Redirect to="/login" />
          }
        </Route>
        <Route path="/login">
          <Login onLogin={login}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
