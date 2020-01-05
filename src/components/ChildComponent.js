import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* <button className="btn" onClick={props.greetHandler}>Greet Parent</button> */}
      <button className="btn" onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
