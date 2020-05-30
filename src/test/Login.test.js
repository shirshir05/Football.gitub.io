// definitions
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {mount, configure } from 'enzyme';
import {LoginForm} from '../components/LoginForm/LoginForm'; 
import { BrowserRouter as Router } from 'react-router-dom';
import TextInput from '../components/InputFields/TextInput';
import NumberInput from '../components/InputFields/NumberInput';
import SubmitButton from '../components/InputFields/SubmitButton';


///////////////////////////// Example Test /////////////////////////////

test('hello world', () => {
  const wrapper = mount(<p>Hello Jest!</p>);
  expect(wrapper.text()).toMatch('Hello Jest!');
});

///////////////////////////// Login Test /////////////////////////////

test('submits username and password', () => {
  const updateTitle1 = (param) => {
    return param;
}
  const username = 'raz'
  const password = '1234'
  const login = mount(<Router><LoginForm username={username} password={password} updateTitle={updateTitle1}/></Router>)
  expect(login.find('username')=='raz')
  expect(login.find('password')=='1234')
});

test('submits username and password', () => {
  const updateTitle1 = (param) => {
    return param;
}
  const username = 'dan'
  const password = '2938'
  const login = mount(<Router><LoginForm username={username} password={password} updateTitle={updateTitle1}/></Router>)
  expect(login.find('username')=='dan')
  expect(login.find('password')=='2938')
});

//////// testTextInput: username, passwor ///////
test('create new event: check numeric input', () => {
  const event = mount(<Router><TextInput label={"Raz3124"}/></Router>);
  expect(event.find('state')==='Raz3124')
});

test('create new event: check wrong numeric input', () => {
  const event = mount(<Router><TextInput label={""}/></Router>);
  expect(event.find('state')==='')
});

//////// testSubmitButton ///////
test('create new event: check submit button', () => {
  const event = mount(<Router><SubmitButton isButtonDisabled={"false"}/></Router>);
  expect(event.find('state')!=='123')
});

test('create new event: check submit button', () => {
  const event = mount(<Router><SubmitButton isButtonDisabled={"true"}/></Router>);
  expect(event.find('handleSubmitClick').toHaveBeenCalledTimes===1)
});
