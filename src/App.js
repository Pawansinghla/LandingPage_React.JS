import React from "react";
import Home from './Components/Pages/Home';
import Header from './Components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Settings from "./Components/Pages/Settings";


export default function App() {
  return (

    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={() => (
            <Home />
          )} />
          <Route exact path='/settings' render={() => (
            <Settings />
          )} />

        </Switch>
      </Router>

    </div>
  );
}