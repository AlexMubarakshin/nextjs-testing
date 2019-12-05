import * as React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../../src/pages/index';


describe('Index', () => {

  it('should render Index page without throwing an error', function () {
    const component = shallow(<IndexPage />);
    expect(component.find('h1').text()).toBe('Hello Next.js 👋');
  });

});
