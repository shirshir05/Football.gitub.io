// definitions
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {mount, configure } from 'enzyme';
import LoginForm from '../components/LoginForm'; 

///////////////////////////// Example Test /////////////////////////////
/*
test('hello world', () => {
  const wrapper = mount(<p>Hello Jest!</p>);
  expect(wrapper.text()).toMatch('Hello Jest!');
});
*/
///////////////////////////// Login Test /////////////////////////////

test('submits username and password', () => {
  const username = 'raz';
  const password = '1234';
  const handleSubmitClickMock = jest.fn(); //mocking pressing the button
  const wrapper = mount(<LoginForm handleSubmitClick={handleSubmitClickMock} />);

  wrapper
    .find({ 'data-testid': 'loginForm-username' })
    .simulate('change', { target: { value: username } });

  wrapper
    .find({ 'data-testid': 'loginForm-password' })
    .simulate('change', { target: { value: password } });

  wrapper.update();
  wrapper.find({ 'data-testid': 'loginForm' }).simulate('submit', {
    preventDefault: () => {}
  });

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    username,
    password
  });
});


