import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {mount, shallow,  configure } from 'enzyme';
import HomeUR from '../components/Home/HomeUR';
import { BrowserRouter as Router } from 'react-router-dom';

const updateTitle1 = (param) => {
    return param;
}
test('show game events: union representetive', () => {
    const ur = mount(<Router><HomeUR updateTitle={updateTitle1}/></Router>);
    ur.find('scorePolicyBtn').simulate
    expect(ur.find('existingSeason').toHaveBeenCalledTimes===1)
});
