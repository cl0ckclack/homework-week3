import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, routes, Switch, Route, NavLink } from 'react-router-dom';
import { input,Output } from './Components';
class App extends Component {

  render() {

    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
              <ul>
                  <li><NavLink to="/input" activeClassName="active">Input</NavLink></li>
                    <li><NavLink to="/Output" activeClassName="active">Output</NavLink></li>
              </ul>
            </div>

        <div className="App-intro">
            <Switch>

                        <Route path="/input" component={input} />
                        <Route path="/Output/:value" component={Output} />

             
            </Switch>
          </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
