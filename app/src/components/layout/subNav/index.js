//Core
import React from 'react'

//CSS
import './subNav.css' 

const subNav = (props) => {
  const classes = ['sub-nav']
  if(props.visibility === false) {
    classes.push('hidden')
  }
  return (
    <div className={classes.join(' ')}>

    </div>
  )
}

export default subNav