//Core
import React from 'react'

//Components
import NavItem from './navItem';
import NavItemWithChildren from './navItemWithChildren'

//CSS
import './nav.css'

const nav = (props) => {
  return (
    <div className='nav'>
      <NavItemWithChildren iconClasses='fas fa-info' title='About Us' toggleSubNav={props.toggleSubNav}/>
      <NavItemWithChildren iconClasses='fab fa-product-hunt' title='Products' toggleSubNav={props.toggleSubNav}/>
      <NavItem to='/services' iconClasses='fas fa-concierge-bell' title='Services'/>
      <NavItem to='/events' iconClasses='far fa-calendar-alt' title='Events'/>
      <NavItemWithChildren iconClasses='far fa-newspaper' title='News' toggleSubNav={props.toggleSubNav}/>
      <NavItemWithChildren iconClasses='far fa-life-ring' title='Support' toggleSubNav={props.toggleSubNav}/>
      <NavItem to='/dealers' iconClasses='fas fa-truck' title='Dealers'/>
      <NavItem to='/contact-us' iconClasses='fas fa-phone' title='Contact Us'/>
      <NavItem to='/client-login' iconClasses='fas fa-users' title='Client Login'/>
    </div>
  )
}

export default nav