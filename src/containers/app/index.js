import React from 'react'
import { Route, Link} from 'react-router-dom';

import './style.css';

import Home from '../home';
import About from '../about';

const App = () => (
  <div className="App">
    <header>
      <div className="container">
        <a className="logo" href="#">giant<strong>SEA</strong></a>
        <nav className="navbar pull-right">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </nav>
      </div>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App