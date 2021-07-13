import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss';
import Home from './pages/Home';
import Document from './pages/Document';
import Page from './pages/Page';

const App = () => (
  <Router>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:documentSlug" exact>
          <Document />
        </Route>
        <Route path="/:documentSlug/:pageSlug">
          <Page />
        </Route>
      </Switch>
    </main>
  </Router>

);

export default App;
