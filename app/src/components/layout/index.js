//Core
import React, { Component } from 'react'

//Components
import Nav from './nav'
import SubNav from './subNav'

//CSS
import './layout.css'

class Layout extends Component {
  state = {
    navVisibilty: false,
    subNavVisibility: false,
    selectedTopic: ''
  }

  openNav = () => {
    this.setState({...this.state, navVisibilty: true})
  }

  closeNav = () => {
    this.setState({...this.state, navVisibilty: false, subNavVisibility: false})
  }

  closeSubNav = () => {
    this.setState({...this.state, subNavVisibility: false})
  }
  
  prepareSubNav = (topic) => {
    this.setState({...this.state, subNavVisibility: true, selectedTopic: topic})
  }

  render() {
    return (
      <div className='layout'>
        <div className='nav-btn'>
          <p onClick={this.openNav}><i className='fas fa-bars'></i></p>
        </div>
        <Nav 
          visibilty={this.state.navVisibilty}
          methods={{
          aboutUs: () => this.prepareSubNav('aboutUs'),
          products: () => this.prepareSubNav('products'),
          support: () => this.prepareSubNav('support'),
          closeNav: () => this.closeNav(),
          closeSubNav: () => this.closeSubNav()
        }}/>
        <SubNav visibility={this.state.subNavVisibility} selectedTopic={this.state.selectedTopic} close={this.closeNav}/>
        <div onClick={this.closeSubNav} className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
  
}

export default Layout