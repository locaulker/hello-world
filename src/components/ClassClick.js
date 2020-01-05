import React, { Component } from 'react';

class ClassClick extends Component {

  clickHandler() {
    console.log('Button Clicked')
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;