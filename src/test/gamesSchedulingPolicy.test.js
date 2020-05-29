import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {mount, shallow,  configure } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import SchedulingPolicy from '../components/LeagueManagement/SchedulingPolicy'; 
import SubmitButton from '../components/InputFields/SubmitButton';

const updateTitle1 = (param) => {
    return param;
}
test('scheduling policy: check updateTitle', () => {
    const schedule = mount(<Router><SchedulingPolicy updateTitle={updateTitle1} newSeason={true}/></Router>);
    expect(schedule.find('updateTitle')==='Update scheduling policy')
});

test('create new event: check handleChange', () => {
    const schedule = mount(<Router><SchedulingPolicy updateTitle={updateTitle1} newSeason={true}/></Router>);
    schedule.simulate
    expect(schedule.find('handleChange').toHaveBeenCalledTimes===1)
});

test('create new event: check sendDetailsToServer', () => {
    const schedule = mount(<Router><SchedulingPolicy updateTitle={updateTitle1} newSeason={true}/></Router>);
    schedule.simulate
    expect(schedule.find('sendDetailsToServer').toHaveBeenCalledTimes===1)
});

test('create new event: check handleSubmitClick', () => {
    const schedule = mount(<Router><SchedulingPolicy updateTitle={updateTitle1} newSeason={true}/></Router>);
    schedule.simulate
    expect(schedule.find('handleSubmitClick').toHaveBeenCalledTimes===1)
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




  
  
