import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {mount, shallow,  configure } from 'enzyme';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'; 
import TextInput from '../components/InputFields/TextInput';
import NumberInput from '../components/InputFields/NumberInput';
import SubmitButton from '../components/InputFields/SubmitButton';
import { BrowserRouter as Router } from 'react-router-dom';

//////// updateTitleTest ///////
var save;
const updateTitle1 = (param) => {
    save=param
    return param;
}
test('register: check updateTitle', () => {
    const register = mount(<Router><RegistrationForm updateTitle={updateTitle1} /></Router>);
    expect(save==='Registration')
});

test('register: handleChange', () => {
    const register = mount(<Router><RegistrationForm updateTitle={updateTitle1}/></Router>);
    register.simulate
    expect(register.find('handleChange').toHaveBeenCalledTimes===1)
});

test('register: sendDetailsToServer', () => {
    const register = mount(<Router><RegistrationForm updateTitle={updateTitle1}/></Router>);
    register.simulate
    expect(register.find('sendDetailsToServer').toHaveBeenCalledTimes===1)
});

test('register: handleSubmitClick', () => {
    const register = mount(<Router><RegistrationForm updateTitle={updateTitle1}/></Router>);
    register.simulate
    expect(register.find('handleSubmitClick').toHaveBeenCalledTimes===1)
});

