//Core
import React from 'react'
import { NavLink } from 'react-router-dom'

//CSS
import './subNav.css' 

const subNav = (props) => {
  const classes = ['sub-nav']
  if(props.visibility === false) {
    classes.push('hidden')
  }
  switch(props.selectedTopic) {
    case 'aboutUs':
      return (
        <div className={classes.join(' ')}>
          <NavLink className='sub-nav-link' to='/about/company-overview' onClick={props.close}>Company Overview</NavLink>
          <NavLink className='sub-nav-link' to='/about/testimonials' onClick={props.close}>Testimonials</NavLink>
          <NavLink className='sub-nav-link' to='/about/privacy-policy' onClick={props.close}>Privacy Policy</NavLink>
          <NavLink className='sub-nav-link' to='/about/terms-of-use' onClick={props.close}>Terms Of Use</NavLink>
        </div>
      )
    case 'products':
      return (
        <div className={classes.join(' ')}>
          <NavLink className='sub-nav-link' to='/products/product-overview' onClick={props.close}>Product Overview</NavLink>
          <NavLink className='sub-nav-link' to='/products/water' onClick={props.close}>Operator10 Water</NavLink>
          <NavLink className='sub-nav-link' to='/products/wastewater' onClick={props.close}>Operator10 Wastewater</NavLink>
          <NavLink className='sub-nav-link' to='/products/synexus' onClick={props.close}>Synexus Pretreatment</NavLink>
          <NavLink className='sub-nav-link' to='/products/antero' onClick={props.close}>Antero Maintenance</NavLink>
          <NavLink className='sub-nav-link' to='/products/product-literature' onClick={props.close}>Product Literature</NavLink>
        </div>
      )
    case 'support':
      return (
        <div className={classes.join(' ')}>
          <NavLink className='sub-nav-link' to='/support/support-overview' onClick={props.close}>Support Overview</NavLink>
          <NavLink className='sub-nav-link' to='/support/go-2-tech' onClick={props.close}>Go2Tech</NavLink>
          <NavLink className='sub-nav-link' to='/support/contact-tech-support' onClick={props.close}>Contact Tech Support</NavLink>
        </div>
      )
    default:
      console.warn('Components::Layout::SubNav::Render::UnrecognizedSelectedTopic')
      return (
        <div className={classes.join(' ')}>
    
        </div>
      )
  }
}

export default subNav