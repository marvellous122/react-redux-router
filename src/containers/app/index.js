import React from 'react'
import { Route } from 'react-router-dom';

import './style.scss';

import Home from '../home';
import About from '../about';

const App = () => (
  <div className="App">
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={About} />
    </div>
  </div>
)

export default App