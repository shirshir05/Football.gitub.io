import React from 'react';
import MenuButton from '../MenuButton/MenuButton'
import {redirectToLogin, gotoAddLeague, gotoApproveTeam, gotoUpdateSeason, gotoSchedulingPolicy, gotoAddTeamToLeague, gotoAddRemoveReferee,gotoWatchGameEvents} from '../Redirect/Redirect'
import { withRouter } from "react-router-dom";
import SearchAndAlerts from '../SearchAndMsg/MenuBar';

function HomeUnionRepresentative(props) {
    props.updateTitle('Home')

    const newSeason = () => {
        props.updateNewSeason(true)
        gotoUpdateSeason()
    }

    const existingSeason = () => {
        props.updateNewSeason(false)
        gotoUpdateSeason()
    }

    return(
        <>
        <SearchAndAlerts/>
        <div className="mt-2">
            <h1>
            Welcome Union Representative
            </h1>
            <MenuButton btnText="Add a league" handle={gotoAddLeague}></MenuButton>
            <MenuButton btnText="Add a season" handle={newSeason}></MenuButton>
            <MenuButton btnText="Add team or referee to league" handle={gotoAddTeamToLeague}></MenuButton>
            <MenuButton id='scorePolicyBtn' btnText="Update score policy for season" handle={existingSeason}></MenuButton>
            <MenuButton btnText="Update games scheduling policy" handle={gotoSchedulingPolicy}></MenuButton>
            <MenuButton btnText="Add or remove referees" handle={gotoAddRemoveReferee}></MenuButton>
            {/* <MenuButton btnText="Manage games"></MenuButton>  */}
            <MenuButton btnText="Approve team creation" handle={gotoApproveTeam}></MenuButton>
            <MenuButton id ='summaryBtn' btnText="View game events" handle={gotoWatchGameEvents}></MenuButton>
            {/* <MenuButton btnText="Finance"></MenuButton> */}
            <MenuButton btnText="Log out" handle={redirectToLogin}></MenuButton>
        </div> 
        </>
    )
}

export default withRouter(HomeUnionRepresentative);