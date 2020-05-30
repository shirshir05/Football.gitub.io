import React from 'react';
import MenuButton from '../MenuButton/MenuButton'
import { withRouter } from "react-router-dom";
import {redirectToLogin, gotoWatchLogs, gotoChangeStatusAdmin, gotoAnswerComplaints,gotoWatchGameEvents} from '../Redirect/Redirect'
import SearchAndAlerts from '../SearchAndMsg/MenuBar';

function HomeSysAdmin(props) {
    props.updateTitle('Home')
    
    return(
        <>
        <SearchAndAlerts/>
        <div className="mt-2">
            <h1>
            Welcome System Administrator
            </h1>
            {/* <MenuButton btnText="Remove Subscription"></MenuButton> */}
            <MenuButton btnText="Answer Complaints" handle={gotoAnswerComplaints}></MenuButton>
            <MenuButton btnText="Change Team Status" handle={gotoChangeStatusAdmin}></MenuButton>
            <MenuButton btnText="Watch System Logs" handle={gotoWatchLogs}></MenuButton>
            <MenuButton id ='summaryBtn' btnText="View game events" handle={gotoWatchGameEvents}></MenuButton>
            {/* <MenuButton btnText="Edit personal details"></MenuButton> */}
            <MenuButton btnText="Log out" handle={redirectToLogin}></MenuButton>
        </div>  
        </>    
    )
}

export default withRouter(HomeSysAdmin);