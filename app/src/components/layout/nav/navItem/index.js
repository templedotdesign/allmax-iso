//Core
import React from 'react'
import { NavLink } from 'react-router-dom'

//CSS
import './navItem.css'

const navItem = (props) => {
  return (
    <NavLink exact to={props.to} className='nav-item' activeClassName='active' onClick={props.clicked}>
      <div style={{padding: '3px'}}>
        <p className='icon'><i className={props.iconClasses}></i></p>
        <p>{props.title}</p>
      </div>
    </NavLink>
  )
}

export default navItem