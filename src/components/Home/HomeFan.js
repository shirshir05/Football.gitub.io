import React from 'react';
import MenuButton from '../MenuButton/MenuButton'
import { withRouter } from "react-router-dom";
import {gotoWatchGameEvents, gotoSendComplaint, gotoGameAlert, redirectToLogin} from '../Redirect/Redirect'
import SearchAndAlerts from '../SearchAndMsg/MenuBar';

function HomeGuest(props) {
    props.updateTitle('Home')
    return(
        <>
        <SearchAndAlerts/>
        <div className="mt-2">
            <h1>Welcome Fan</h1>
            <MenuButton btnText="Register to game alerts" handle={gotoGameAlert}></MenuButton>
            <MenuButton btnText="View game events" handle={gotoWatchGameEvents}></MenuButton>
            <MenuButton btnText="Send a complaint" handle={gotoSendComplaint}></MenuButton>
            <MenuButton btnText="Log out" handle={redirectToLogin}></MenuButton>
        </div>
        </>
    )
}

export default withRouter(HomeGuest);