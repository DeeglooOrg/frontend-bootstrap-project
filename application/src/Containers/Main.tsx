import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Components/Navigation/Navigation'
import HomePage from '../Components/HomePage/HomePage';
import Component1 from '../Components/Component1/Component1';
import Component2 from '../Components/Component2/Component2';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/component1" component={Component1} />
          <Route path="/component2" component={Component2} />
          <Route path='*' render={() => <h1>not found</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;