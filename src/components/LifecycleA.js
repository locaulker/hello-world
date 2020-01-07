import React, { Component } from 'react'
import  LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Vishwas'
    }
    console.log('LifecycleA Constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleA ComponentDidMount')
  }
  
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        Lifecycle A
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA;