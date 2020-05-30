// definitions
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {mount, shallow,  configure } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import UpdateEvent from '../components/GameManagement/EditEvent'; 
import TextInput from '../components/InputFields/TextInput';
import NumberInput from '../components/InputFields/NumberInput';
import SubmitButton from '../components/InputFields/SubmitButton';

//////// updateTitleTest ///////
var save;
const updateTitle1 = (param) => {
    save=param
    return param;
}
test('create new event: check updateTitle', () => {
    const event = mount(<Router><UpdateEvent updateTitle={updateTitle1} newSeason={true}/></Router>);
    expect(save==='Add event to game')
});


//////// buttonTextTest ///////
test('create new event: check butinText', () => {
    const event = mount(<Router><UpdateEvent updateTitle={updateTitle1} newSeason={true}/></Router>);
    expect(event.find('buttonText')==='Add event')
});

//////// testNumberInput: GameID///////
test('create new event: check numeric input', () => {
    const event = mount(<Router><NumberInput label={"123"}/></Router>);
    expect(event.find('state')==='123')
});

test('create new event: check wrong numeric input', () => {
    const event = mount(<Router><NumberInput label={"abc"}/></Router>);
    expect(event.find('state')!=='abc')
});

//////// testTextInput: Team Name, Player UserName ///////
test('create new event: check numeric input', () => {
    const event = mount(<Router><NumberInput label={"Raz"}/></Router>);
    expect(event.find('state')==='Raz')
});

test('create new event: check wrong numeric input', () => {
    const event = mount(<Router><NumberInput label={"123"}/></Router>);
    expect(event.find('state')==='')
});

//////// testTextInput: Team Name, Player UserName ///////
test('create new event: check numeric input', () => {
    const event = mount(<Router><TextInput label={"Raz"}/></Router>);
    expect(event.find('state')==='Raz')
});

test('create new event: check wrong numeric input', () => {
    const event = mount(<Router><TextInput label={"123"}/></Router>);
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




