//Core
import React from 'react'

import Card from '../../card'

const home = () => {
  return (
    <div className='content'>
      <h1>home</h1>
      <Card onClick={() => console.log('clicked')} style={{cursor: 'pointer'}}> 
        <h2 style={{textAlign: 'center'}}>This Is A Heading.</h2>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in lobortis massa. Aliquam eu purus non velit cursus semper. Morbi venenatis tempus tempus. Integer et sem sit amet urna efficitur tempus. Etiam lobortis hendrerit tempor. Nullam tempus erat dolor, eget molestie justo pretium in.</p>
        <br/>
        <small>06/25/2018</small>
      </Card>
    </div>
  )
}

export default home