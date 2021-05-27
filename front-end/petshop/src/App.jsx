import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import './assets/css/base/base.css';

import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/sobre">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
