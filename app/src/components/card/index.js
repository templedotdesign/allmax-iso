//Core
import React from 'react'

//CSS
import './card.css'

const card = (props) => {
    return (
        <div className='card' {...props}>
            {props.children}
        </div>
    )
}

export default card