import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: false
    }
  }
  
  render() {

    // 4. Short Circuit Operator
    return this.state.isLoggedIn && <div>Welcome Viswas</div>

    // 3. Ternary Operator
    // return (
    //   this.state.isLoggedIn ? (
    //     <div>Welcom Viswas</div>
    //   ) : (
    //     <div>Welcom Guest</div>
    //   )
    // )
    
    // 2. element variable approach
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Viswas</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // 1. i/else appoach
    // if(this.state.isLoggedIn) {
    //   return (
    //     <div>Welcome Viswas</div>
    //   )
    // } else {
    //   return (
    //     <div>Welcome Guest</div>
    //   )
    // }

    // return (
    //   <div>Welcome Viswas</div>
    //   <div>Welcome Guest</div>
    // )
  }
}

export default UserGreeting