import React from 'react'
import ReactDOM from 'react-dom'

function formatName (user) {
  return `${user.firstName} ${user.lastName}`
}

const user = {
  firstName: 'Luke',
  lastName: 'Pensiero'
}

const element = (
  <h1>
    Hello, {formatName(user)}
  </h1>
)

ReactDOM.render(
  element,
  document.getElementById('app')
)
