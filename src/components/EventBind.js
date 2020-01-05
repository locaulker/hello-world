import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message: 'Hello'
    }

    // this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler = () => {
    this.setState({
      message: 'Goodbye!'
    })
    console.log(this)
  }
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button 
          className="btn"
          // onClick={this.clickHandler.bind(this)}
          // onClick={() => this.clickHandler()}
          onClick={this.clickHandler}
        >Click</button>
      </div>
    );
  }
}

export default EventBind;