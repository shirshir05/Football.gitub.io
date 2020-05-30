import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {mount, shallow,  configure } from 'enzyme';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'; 
import HomeCoach from '../components/Home/HomeCoach';
import HomeFan from '../components/Home/HomeFan';
import HomePlayer from '../components/Home/HomePlayer';
import HomeReferee from '../components/Home/HomeReferee';
import HomeSysAdmin from '../components/Home/HomeSysAdmin';
import HomeTM from '../components/Home/HomeTM';
import HomeTO from '../components/Home/HomeTO';
import HomeUR from '../components/Home/HomeUR';
import { BrowserRouter as Router } from 'react-router-dom';

const updateTitle1 = (param) => {
    return param;
}

test('show game events: coach', () => {
    const event = mount(<Router><HomeCoach updateTitle={updateTitle1}/></Router>);
    event.find('summaryBtn').simulate
    expect(event.find('gotoWatchGameEvents').toHaveBeenCalledTimes===1)
});

test('show game events: fan', () => {
    const event = mount(<Router><HomeFan updateTitle={updateTitle1}/></Router>);
    event.find('summaryBtn').simulate
    expect(event.find('gotoWatchGameEvents').toHaveBeenCalledTimes===1)
});

test('show game events: player', () => {
    const event = mount(<Router><HomePlayer updateTitle={updateTitle1}/></Router>);
    event.find('summaryBtn').simulate
    expect(event.find('gotoWatchGameEvents').toHaveBeenCalledTimes===1)
});

test('show game events: referee', () => {
    const event = mount(<Router><HomeReferee updateTitle={updateTitle1}/></Router>);
    event.find('summaryBtn').simulate
    expect(event.find('gotoWatchGameEvents').toHaveBeenCalledTimes===1)
});

test('show game events: system administrator', () => {
    const event = mount(<Router><HomeSysAdmin updateTitle={updateTitle1}/></Router>);
    event.find('summaryBtn').simulate
    expect(event.find('gotoWatchGameEvents').toHaveBeenCalledTimes===1)
});

test('show game events: team manager', () => {
    const event = mount(<Router><HomeTM updateTitle={updateTitle1}/></Router>);
    event.find('summaryBtn').simulate
    expect(event.find('gotoWatchGameEvents').toHaveBeenCalledTimes===1)
});

test('show game events: team owner', () => {
    const event = mount(<Router><HomeTO updateTitle={updateTitle1}/></Router>);
    event.find('summaryBtn').simulate
    expect(event.find('gotoWatchGameEvents').toHaveBeenCalledTimes===1)
});

test('show game events: union representetive', () => {
    const event = mount(<Router><HomeUR updateTitle={updateTitle1}/></Router>);
    event.find('summaryBtn').simulate
    expect(event.find('gotoWatchGameEvents').toHaveBeenCalledTimes===1)
});

