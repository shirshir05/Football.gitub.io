import history from '../history';
import {API_BASE_URL} from '../../constants/apiContants';
import axios from 'axios';

export function redirectToHome (username, alreadyIn) {
    // props.updateTitle('Home')
    // we need to have a function here to get the type of user from the server and insert it into the useremail variant
    var kindofuser;
    if(alreadyIn !== ''){
        kindofuser = alreadyIn
    }
    else if(username !== ''){
        kindofuser = username //get from server the type of user
    }
    else{ //is a guest
        kindofuser = 'guest'
    }
    history.push(`/Football.gitub.io/home/${kindofuser}`);
}

export function goBack(){
    history.goBack()
}

export function redirectToLogin(){
    axios.get(API_BASE_URL+'logout')
    sessionStorage.removeItem
    history.push('/Football.gitub.io/login'); 
}

export function redirectToRegister() {
    history.push('/Football.gitub.io/register')
}

export function gotoAddLeague(){
    history.push('addleague')
}

export function gotoAddRole(){
    history.push('addRole')
}

export function gotoTeamMenu(){
    history.push('team')
}

export function gotoCreateTeam(){
    history.push('createteam')
}

export function gotoApproveTeam(){
    history.push('approveteam')
}

export function gotoChangeStatus(){
    history.push('changeteamstatus')
}

export function gotoChangeStatusAdmin(){
    history.push('changeteamstatusadmin')
}

export function gotoAddRemove(){
    history.push('addremove')
}

export function gotoAddPermissionsTM(){
    history.push('addpermissionstm')
}

export function gotoNavigateRole(){
    history.push('navigaterole')
}

export function gotoUpdateSeason(){
    history.push('updateseason')
}

export function gotoSchedulingPolicy(){
    history.push('schedulingpolicy')
}

export function gotoAddTeamToLeague(){
    history.push('addteamtoleague')
}

export function gotoAddRemoveReferee(){
    history.push('addremovereferee')
}

export function gotoEditEvent(){
    history.push('editevent')
}

export function gotoWatchLogs(){
    history.push('watchlogs')
}

export function gotoAnswerComplaints(){
    history.push('answercomplaints')
}

export function gotoSaveGame(){
    history.push('savegame')
}

export function gotoWatchGameEvents(){
    history.push('/Football.gitub.io/viewgameevents')
}

export function gotoWatchGames(){
    history.push('viewgames')
}

export function gotoSendComplaint(){
    history.push('sendcomplaint')
}

export function gotoGameAlert(){
    history.push('gamealert')
}