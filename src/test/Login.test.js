// definitions
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {mount, configure } from 'enzyme';
import {LoginForm} from '../components/LoginForm/LoginForm'; 
import { BrowserRouter as Router } from 'react-router-dom';


///////////////////////////// Example Test /////////////////////////////

test('hello world', () => {
  const wrapper = mount(<p>Hello Jest!</p>);
  expect(wrapper.text()).toMatch('Hello Jest!');
});

///////////////////////////// Login Test /////////////////////////////

/*
test('submits username and password', () => {
  const username = 'raz';
  const password = '1234';
  const handleSubmitClick = jest.fn(); //mocking pressing the button
  const wrapper = mount(
    <Router>
        <LoginForm update handleSubmitClick={handleSubmitClick}/>
    </Router>
  );
});
*/

