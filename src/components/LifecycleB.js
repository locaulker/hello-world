import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Vishwas'
    }
    console.log('LifecycleB Constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleB ComponentDidMount')
  }
  
  render() {
    console.log('LifeCycleB render')
    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default LifecycleB;