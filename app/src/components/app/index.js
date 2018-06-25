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
import CompanyOverview from '../routes/about/companyOverview'
import PrivacyPolicy from '../routes/about/privacyPolicy'
import TermsOfUse from '../routes/about/termsOfUse'
import Testimonials from '../routes/about/testimonials'
import Antero from '../routes/products/antero'
import ProductLiterature from '../routes/products/productLiterature'
import ProductOverview from '../routes/products/productOverview'
import Synexus from '../routes/products/synexus'
import Wastewater from '../routes/products/wastewater'
import Water from '../routes/products/water'
import SupportOverview from '../routes/support/supportOverview'
import Go2Tech from '../routes/support/go2Tech'
import ContactTechSupport from '../routes/support/contactTechSupport'

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
          <Route exact path='/about/company-overview' component={CompanyOverview}/>
          <Route exact path='/about/privacy-policy' component={PrivacyPolicy}/>
          <Route exact path='/about/terms-of-use' component={TermsOfUse}/>
          <Route exact path='/about/testimonials' component={Testimonials}/>
          <Route exact path='/products/product-overview' component={ProductOverview}/>
          <Route exact path='/products/product-literature' component={ProductLiterature}/>
          <Route exact path='/products/antero' component={Antero}/>
          <Route exact path='/products/synexus' component={Synexus}/>
          <Route exact path='/products/wastewater' component={Wastewater}/>
          <Route exact path='/products/water' component={Water}/>
          <Route exact path='/support/support-overview' component={SupportOverview}/>
          <Route exact path='/support/go-2-tech' component={Go2Tech}/>
          <Route exact path='/support/contact-tech-support' component={ContactTechSupport}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default app