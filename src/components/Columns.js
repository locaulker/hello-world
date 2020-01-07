import React from 'react'

function Columns() {
  const items = []

  return (
    <>
      {
        items.map( item => (
          <>
            <h1>Title</h1>
            <p>{item.title}</p>
          </>
        ))
      }
      <td>Name</td>
      <td>Vishwas</td>
    </>
  )
}

export default Columns
