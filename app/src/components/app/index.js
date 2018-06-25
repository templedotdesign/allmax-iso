//Core
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom' 

//Components
import Layout from '../layout'
import About from '../routes/about'
import ClientLogin from '../routes/clientLogin'
import ContactUs from '../routes/contactUs'
import Dealers from '../routes/dealers'
import Events from '../routes/events'
import Home from '../routes/home'
import News from '../routes/news'
import Products from '../routes/products'
import Services from '../routes/services'
import Support from '../routes/support'

const app = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/about' component={About}/>
          <Route exact path='/client-login' component={ClientLogin}/>
          <Route exact path='/contact-us' component={ContactUs}/>
          <Route exact path='/dealers' component={Dealers}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/news' component={News}/>
          <Route exact path='/products' component={Products}/>
          <Route exact path='/services' component={Services}/>
          <Route exact path='/support' component={Support}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default app