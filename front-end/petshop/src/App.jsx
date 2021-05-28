import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import './assets/css/base/base.css';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Post } from './pages/Post';
import { Page404 } from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/sobre">
          <About />
        </Route>

        <Route path="/posts/:id">
          <Post />
        </Route>

        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
