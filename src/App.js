import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home'
import PlayerDesc from './components/PlayerDesc'
import Header from './components/Header'
import './App.css';

function App() {

  return (
    <div>
          <Router>
            <div>
              <Header />
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/player">
                  <PlayerDesc />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
    </div>
  );
}

export default App;
