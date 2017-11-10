import React from 'react'
import { Route, NavLink} from 'react-router-dom';

import './style.scss';

import Home from '../home';
import About from '../about';

const App = () => (
  <div className="App">
    <header>
      <div className="container">
        <div className="navbar nav-brand">
          <a className="logo" href="/">up<strong>Pe@k</strong></a>
        </div>
        <nav className="pull-right">
          <NavLink to="/" activeClassName="active">HOME</NavLink>
          <NavLink to="/about-us" activeClassName="active">ABOUT</NavLink>
        </nav>
      </div>
    </header>

    <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </div>
  </div>
)

export default App