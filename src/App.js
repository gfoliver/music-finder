import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Global from './styles/Global'

import Home from './components/Home'
import Search from './components/Search'
import Song from './components/Song'

function App() {
  return (
    <div className="App">
      <Global />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/:artist/:title">
            <Song />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App
