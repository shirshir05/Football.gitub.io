import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {mount, shallow,  configure } from 'enzyme';
import CreateTeam from '../components/TeamManagement/CreateTeam'; 
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
test('create new team: check updateTitle', () => {
    const team = mount(<Router><CreateTeam updateTitle={updateTitle1} newSeason={true}/></Router>);
    expect(save==='Creat a new team')
});

test('create new event: handleSubmitClick', () => {
    const team = mount(<Router><CreateTeam updateTitle={updateTitle1}/></Router>);
    team.simulate
    expect(team.find('handleSubmitClick').toHaveBeenCalledTimes===1)
});

test('create new event: sendDetailsToServer', () => {
    const team = mount(<Router><CreateTeam updateTitle={updateTitle1}/></Router>);
    team.simulate
    expect(team.find('sendDetailsToServer').toHaveBeenCalledTimes===1)
});

test('create new event: handleChange', () => {
    const team = mount(<Router><CreateTeam updateTitle={updateTitle1}/></Router>);
    team.simulate
    expect(team.find('handleChange').toHaveBeenCalledTimes===1)
});



