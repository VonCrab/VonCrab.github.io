import React from 'react'

function ListItem (props) {
  return (
    <li>{props.value}</li>
  )
}

function NumberList (props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) =>
    <ListItem key={numbers.toString()}
      value={number} />
  )
  return (
    <ul>{listItems}</ul>
  )
}

export {
  NumberList
}
