import React from 'react'
import PropTypes from 'prop-types'

const Users = ({user}) => (
  <div>
    <h2>Users Blog app</h2>
    <ul>
      <li>{user}</li>
      <li>John Wick</li>
      <li>Liam Neeson</li>
    </ul>
  </div>
)

Users.propTypes = {
  user: PropTypes.string
}

export default Users