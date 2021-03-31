import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const Login = (props) => {
  const history = useHistory()
  
  const onSubmit = (event) => {
    event.preventDefault()
    //eslint-disable-next-line react/prop-types
    props.onLogin('Randres')
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

export default Login