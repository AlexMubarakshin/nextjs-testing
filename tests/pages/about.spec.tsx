import * as React from 'react';
import { shallow } from 'enzyme';

import AboutPage from '../../src/pages/about';

describe('About page', () => {

  test('should render About page without throwing an error', () => {
    const component = shallow(<AboutPage />);
    expect(component.find('h1').text()).toBe('About');
    expect(component.find('.description').text()).toBe('This is the about page');
  });

});
