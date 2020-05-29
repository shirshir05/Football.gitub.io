// definitions
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {mount, shallow,  configure } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Alert from '../components/AlertComponent/AlertComponent'; 
import AlertsInModal from '../components/SearchAndMsg/AlertsFromServer/AlertsInModal'; 
import TextInput from '../components/InputFields/TextInput';
import NumberInput from '../components/InputFields/NumberInput';
import SubmitButton from '../components/InputFields/SubmitButton';
import { PropTypes } from 'react'



const hideError1 = (param) => {
    return param;
}
test('hide alert', () => {
    const alert = mount(<Router><Alert hideError={hideError1} /></Router>);
    alert.simulate
    expect(alert.find('closeModal').toHaveBeenCalledTimes===1)
});

test('show alert', () => {
    const alert = mount(<Router><Alert hideError={hideError1} /></Router>);
    alert.simulate
    expect(alert.find('openModal').toHaveBeenCalledTimes===1)
});

test('get alerts from server', () => {
    const alert = mount(<Router><AlertsInModal hideError={hideError1} /></Router>);
    alert.simulate
    expect(alert.find('handleShow').toHaveBeenCalledTimes===1)
});


test('message button test', () => {
    const alert = mount(<Router><AlertsInModal hideError={hideError1} /></Router>);
    alert.simulate
    expect(alert.find('msgBtn').toHaveBeenCalledTimes===1)
});


