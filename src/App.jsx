import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Document from './pages/Document';

const App = () => (
  <Router>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:documentSlug">
          <Document />
        </Route>
      </Switch>
    </main>
  </Router>

);

export default App;
