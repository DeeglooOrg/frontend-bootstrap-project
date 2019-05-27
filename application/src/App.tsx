import * as React from 'react';
import { Component } from 'react';
import './App.css';

import Main from './Containers/Main';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Main />
      </div>
    );
  }
}

export default App;