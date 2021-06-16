import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Login = (props) => {
  const [user, setUser] = useState('')
  const history = useHistory()
  
  const handleUsername = (e) => {
    e.preventDefault()
    setUser(e.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin(user)
    history.push('/')
  }

  return (
    <div>
      <h2>login</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>
            username: 
          </Form.Label>
          <Form.Control 
            type="text"
            name="username" 
            onChange={(e) => handleUsername(e)}
          />
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
          />
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

Login.propTypes = {
  onLogin: PropTypes.string 
}

export default Login