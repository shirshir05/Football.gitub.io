import React, {useState} from 'react'
import './App.css'
import Header from './components/Header/Header'
import {Router, Switch, Route} from "react-router-dom"
import AlertComponent from './components/AlertComponent/AlertComponent'
import history from "../src/components/history"
import {HOST} from "./constants/apiContants"

// pages:
  // entrance:
import LoginForm from './components/LoginForm/LoginForm'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
  // home pages:
import HomeUnionRepresentative from './components/Home/HomeUR'
import HomeGuest from './components/Home/HomeGuest'
import HomeTeamOwner from './components/Home/HomeTO'
import HomeTeamManager from './components/Home/HomeTM'
import HomeReferee from './components/Home/HomeReferee'
import HomeFan from './components/Home/HomeFan'
import HomePlayer from './components/Home/HomePlayer'
import HomeCoach from './components/Home/HomeCoach'
  // functionalities:
import AddLeague from './components/LeagueManagement/AddALeague'
import TeamMenu from './components/TeamManagement/TeamMenu'
import CreateTeam from './components/TeamManagement/CreateTeam'
import ApproveTeamCreation from './components/TeamManagement/ApproveTeamCreation'
import ChangeTeamStatus from './components/TeamManagement/ExistingTeam/ChangeTeamStatus'
import AddRemoveObject from './components/TeamManagement/ExistingTeam/AddRemoveObject'
import AddRole from './components/TeamManagement/AddRole'
import AddPermissionsToTM from './components/TeamManagement/AddPermissionsToTM'
import NavigateInRoles from './components/TeamManagement/NavigateInRoles'
import UpdateSeasonInLeague from './components/LeagueManagement/UpdateSeasonInLeague'
import SchedulingPolicy from './components/LeagueManagement/SchedulingPolicy'
import AddTeamToLeague from './components/LeagueManagement/AddTeamToLeague'
import AddRemoveReferee from './components/ManageReferees/AddRemoveReferee'
import EditEvent from './components/GameManagement/EditEvent'
import HomeSysAdmin from './components/Home/HomeSysAdmin'
import WatchSysLogs from './components/Logs/WatchSysLogs'
import ChangeTeamStatusSysAdmin from './components/TeamManagement/ExistingTeam/ChangeTeamStatusSysAdmin'
import AnswerComplaints from './components/Complaints/AnswerComplaints'
import SaveGame from './components/GameManagement/SaveGame'
import ViewGameEvents from './components/GameManagement/ViewGameEvents'
import ViewGamesReferee from './components/GameManagement/ViewGamesReferee'
import SendComplaint from './components/Complaints/SendComplaint'
import RegisterToGame from './components/GameManagement/RegisterToGame'


function App() {
  const [title, updateTitle] = useState(null)
  const [errorMessage, updateErrorMessage] = useState(null)
  const [newSeason, updateNewSeason] = useState(null)
  return (
    <Router history={history}>
    <div className="App">
      <Header title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path= "/Football.gitub.io/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/Football.gitub.io/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            {/* home pages: */}
            <Route path="/Football.gitub.io/" exact={true}>
              <HomeGuest updateTitle={updateTitle}/>
            </Route>
            <Route path="/Football.gitub.io/home/guest">
              <HomeGuest updateTitle={updateTitle}/>
            </Route>
            <Route path="/Football.gitub.io/home/fan">
              <HomeFan updateTitle={updateTitle}/>
            </Route>
            <Route path="/Football.gitub.io/home/unionrepresentative">
              <HomeUnionRepresentative updateTitle={updateTitle} updateNewSeason={updateNewSeason}/>
            </Route>
            <Route path="/Football.gitub.io/home/teamowner">
              <HomeTeamOwner updateTitle={updateTitle}/>
            </Route>
            <Route path="/Football.gitub.io/home/teammanager">
              <HomeTeamManager updateTitle={updateTitle}/>
            </Route>
            <Route path="/Football.gitub.io/home/player">
              <HomePlayer updateTitle={updateTitle}/>
            </Route>
            <Route path="/Football.gitub.io/home/coach">
              <HomeCoach updateTitle={updateTitle}/>
            </Route>
            <Route path="/Football.gitub.io/home/referee">
              <HomeReferee updateTitle={updateTitle} updateNewSeason={updateNewSeason}/>
            </Route>
            <Route path="/Football.gitub.io/home/systemadministrator">
              <HomeSysAdmin updateTitle={updateTitle}/>
            </Route>
            {/* actions: */}
              {/* sys admin: */}
            <Route path='/Football.gitub.io/home/watchlogs'>
              <WatchSysLogs updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/changeteamstatusadmin'>
              <ChangeTeamStatusSysAdmin updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/answercomplaints'>
              <AnswerComplaints updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
              {/* Complaints: */}
            <Route path='/Football.gitub.io/home/sendcomplaint'>
              <SendComplaint updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
              {/* league and team: */}
            <Route path='/Football.gitub.io/home/addleague'>
              <AddLeague updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/team'>
              <TeamMenu updateTitle={updateTitle}/>
            </Route>
            <Route path='/Football.gitub.io/home/createteam'>
              <CreateTeam updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/approveteam'>
              <ApproveTeamCreation updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/changeteamstatus'>
              <ChangeTeamStatus updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/addremove'>
              <AddRemoveObject updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/addrole'>
              <AddRole updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/addpermissionstm'>
              <AddPermissionsToTM updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/navigaterole'>
              <NavigateInRoles updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/updateseason'>
              <UpdateSeasonInLeague updateTitle={updateTitle} showError={updateErrorMessage} newSeason={newSeason}/>
            </Route>
            <Route path='/Football.gitub.io/home/schedulingpolicy'>
              <SchedulingPolicy updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/addteamtoleague'>
              <AddTeamToLeague updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/addremovereferee'>
              <AddRemoveReferee updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
              {/* events and games: */}
            <Route path='/Football.gitub.io/home/editevent'>
              <EditEvent updateTitle={updateTitle} showError={updateErrorMessage} newSeason={newSeason}/>
            </Route>
            <Route path='/Football.gitub.io/home/savegame'>
              <SaveGame updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/viewgameevents'>
              <ViewGameEvents updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/viewgames'>
              <ViewGamesReferee updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
            <Route path='/Football.gitub.io/home/gamealert'>
              <RegisterToGame updateTitle={updateTitle} showError={updateErrorMessage}/>
            </Route>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
  );
}

export default App;
