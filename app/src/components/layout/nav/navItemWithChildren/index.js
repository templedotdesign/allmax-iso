//Core
import React from 'react'

const navItemWithChildren = (props) => {
  return (
    <div className='nav-item' style={{padding: '3px'}} onMouseEnter={props.toggleSubNav}>
      <p className='icon'><i className={props.iconClasses}></i></p>
      <p>{props.title}</p>
    </div>
  )
}

export default navItemWithChildren