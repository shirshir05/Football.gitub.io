import React from 'react';
import MenuButton from '../MenuButton/MenuButton'
import { withRouter } from "react-router-dom";
import {redirectToRegister, redirectToLogin, gotoWatchGameEvents} from '../Redirect/Redirect'
import Search from '../Search/Search';

function HomeGuest(props) {
    props.updateTitle('Home')
    return(
        <div className="mt-2">
            <h1>Welcome</h1>
            <MenuButton btnText="Register" handle={redirectToRegister}></MenuButton>
            <MenuButton btnText="Login" handle={redirectToLogin}></MenuButton>
            <MenuButton btnText="View game events" handle={gotoWatchGameEvents}></MenuButton>
            <MenuButton btnText="Score Tables"></MenuButton>
            {/* <MenuButton btnText="Players and Coaches Personal Pages"></MenuButton> */}
            {/* <MenuButton btnText="Team Pages"></MenuButton> */}
            <Search/>
        </div>
    )
}

export default withRouter(HomeGuest);