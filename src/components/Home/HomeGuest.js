import React from 'react';
import MenuButton from '../MenuButton/MenuButton'
import { withRouter } from "react-router-dom";
import {redirectToRegister, redirectToLogin, gotoWatchGameEvents} from '../Redirect/Redirect'
import SearchAndAlerts from '../SearchAndMsg/MenuBar';

function HomeGuest(props) {
    props.updateTitle('Home')
    return(
        <>
        <SearchAndAlerts show={false}/>
        <div className="mt-2">
            <h1>Welcome</h1>
            <MenuButton btnText="Register" handle={redirectToRegister}></MenuButton>
            <MenuButton btnText="Login" handle={redirectToLogin}></MenuButton>
            <MenuButton btnText="View game events" handle={gotoWatchGameEvents}></MenuButton>
            {/* <MenuButton btnText="Score tables"></MenuButton> */}
            {/* <MenuButton btnText="Players and Coaches Personal Pages"></MenuButton> */}
            {/* <MenuButton btnText="Team Pages"></MenuButton> */}
            
        </div>
        </>
    )
}

export default withRouter(HomeGuest);