import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
