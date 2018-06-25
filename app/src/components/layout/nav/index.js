//Core
import React from 'react'

//Components
import NavItem from './navItem';
import NavItemWithChildren from './navItemWithChildren'

//CSS
import './nav.css'

const nav = (props) => {
  const classes = ['nav']
  if(props.visibilty === false) {
    classes.push('hidden')
  }
  return (
    <div className={classes.join(' ')}>
      <div className='nav-btn-white' onClick={props.methods.closeNav}>
          <p><i className='fas fa-arrow-left'></i></p>
      </div>
      <NavItemWithChildren iconClasses='fas fa-info' title='About Us' toggleSubNav={props.methods.aboutUs}/>
      <NavItemWithChildren iconClasses='fab fa-product-hunt' title='Products' toggleSubNav={props.methods.products}/>
      <NavItem to='/services' iconClasses='fas fa-concierge-bell' title='Services' clicked={props.methods.closeNav}/>
      <NavItem to='/events' iconClasses='far fa-calendar-alt' title='Events' clicked={props.methods.closeNav}/>
      <NavItem to='/news' iconClasses='far fa-newspaper' title='News' clicked={props.methods.closeNav}/>
      <NavItemWithChildren iconClasses='far fa-life-ring' title='Support' toggleSubNav={props.methods.support}/>
      <NavItem to='/dealers' iconClasses='fas fa-truck' title='Dealers' clicked={props.methods.closeNav}/>
      <NavItem to='/contact-us' iconClasses='fas fa-phone' title='Contact Us' clicked={props.methods.closeNav}/>
      <NavItem to='/client-login' iconClasses='fas fa-users' title='Client Login' clicked={props.methods.closeNav}/>
    </div>
  )
}

export default nav