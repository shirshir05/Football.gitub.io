import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import { shallow, mount, configure } from 'enzyme';

test('hello world', () => {
  const wrapper = mount(<p>Hello Jest!</p>);
  expect(wrapper.text()).toMatch('Hello Jest!');
});

