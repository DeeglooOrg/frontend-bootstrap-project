import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import HomePage from '../components/HomePage/HomePage';

describe('<HomePage /> component', () => {
  it('should render HomePage', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomePage />, div)
  })

  it('should contain "<h1>Home page</h1>" tag', () => {
    const result = shallow(<HomePage />).contains(<h1>Home page</h1>);
    expect(result).toBeTruthy();
  });
});
