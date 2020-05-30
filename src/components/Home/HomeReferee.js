import React from 'react';
import MenuButton from '../MenuButton/MenuButton'
import { withRouter } from "react-router-dom";
import {redirectToLogin, gotoEditEvent, gotoSaveGame,gotoWatchGames,gotoWatchGameEvents} from '../Redirect/Redirect'
import SearchAndAlerts from '../SearchAndMsg/MenuBar';

function HomeReferee(props) {
    props.updateTitle('Home')

    const newEvent = () => {
        props.updateNewSeason(true)
        gotoEditEvent()
    }

    const existingEvent = () => {
        props.updateNewSeason(false)
        gotoEditEvent()
    }
    
    return(
        <>
        <SearchAndAlerts/>
        <div className="mt-2">
            <h1>
            Welcome Referee
            </h1>
            <MenuButton btnText="Save game" handle={gotoSaveGame}></MenuButton>
            <MenuButton btnText="Create new event" handle={newEvent}></MenuButton>
            <MenuButton btnText="Edit event" handle={existingEvent}></MenuButton>
            <MenuButton id ='summaryBtn' btnText="View all games" handle={gotoWatchGames}></MenuButton>
            <MenuButton btnText="View game events" handle={gotoWatchGameEvents}></MenuButton>
            <MenuButton btnText="Log out" handle={redirectToLogin}></MenuButton>
        </div>   
        </>   
    )
}

export default withRouter(HomeReferee);