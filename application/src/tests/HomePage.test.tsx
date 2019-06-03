import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';

// the next two lines are needed to make the tests work (for React)
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import HomePage from '../Components/HomePage/HomePage';

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
