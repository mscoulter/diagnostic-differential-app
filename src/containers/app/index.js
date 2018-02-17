import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about/about_us'
import Contact from '../contact/contact_info'
import Navigation from '../Navigation'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const App = () => (
  <div>
    <Navigation/>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />

    </main>
  </div>
)

export default App
