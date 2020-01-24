import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';

function App(props) {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
