import React from 'react';
import { Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { Footer, Blog, Possibility, Features, MyoCharm, Header, Store } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div>
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <MyoCharm />
      <Possibility />
      <div className='gradient__bg'>
        <Store />
      </div>
      <Blog />
      <CTA />
      <Features />
      <Footer />
    </div>
  </div> 
)


export default App;