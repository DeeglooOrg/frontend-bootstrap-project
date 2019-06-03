import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HomePage from '../Components/HomePage/HomePage';
// import { shallow } from 'enzyme';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePage />, div)
})


