import * as React from 'react';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation'
import HomePage from '../components/HomePage/HomePage';
import Component1 from '../components/Component1/Component1';
import Login from '../components/Login/Login';

import RequireAuth from '../components/RequireAuth/RequireAuth';

class App extends Component {
  render() {
    return (
      <> {/* Router removed because time traveling in Redux DevTools - specs are in the connected-react-router documentation */}
        <Navigation />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/component1' component={Component1} />
          <Route path='/p' component={RequireAuth} />
          <Route path='/login' component={Login} />
          <Route path='*' render={() => <h1>not found</h1>} />
        </Switch>
      </>
    );
  }
}

export default App;
