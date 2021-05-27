import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import './assets/css/base/base.css';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Page404 } from './pages/Page404';

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

        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
