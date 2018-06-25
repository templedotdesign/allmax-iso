//Core
import React, { Component } from 'react'

//Components
import Nav from './nav'
import SubNav from './subNav'

//CSS
import './layout.css'

class Layout extends Component {
  state = {
    subNavVisibility: false
  }

  toggleSubNav = () => {
    this.setState({...this.state, subNavVisibility: !this.state.subNavVisibility})
  }

  render() {
    return (
      <div className='layout'>
        <Nav toggleSubNav={this.toggleSubNav}/>
        <SubNav visibility={this.state.subNavVisibility}/>
        {this.props.children}
      </div>
    )
  }
  
}

export default Layout