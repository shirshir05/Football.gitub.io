import React from 'react';
import MenuButton from '../MenuButton/MenuButton'
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiContants';
import {redirectToHome} from '../Redirect/Redirect';
import { withRouter } from "react-router-dom";

function SelectStart(props) {
    props.updateTitle('Start')
    const sendDetailsToServer = (objectType) => {
        axios.get(API_BASE_URL+'username/'+objectType, {withCredentials: true })
            .then(function (response) {
                if(response.status === 200){
                    redirectToHome('','')
                    props.showError(null)
                } else{
                    props.showError(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });   
    }

    const existing = () => sendDetailsToServer('startdb')
    const init = () => sendDetailsToServer('startclean')

    return(
        <div className="mt-2">
            <h1>
            Please select an action to start the system
            </h1>
            <label>Starting the system in both ways will also connect it to required outer systems</label>
            <MenuButton btnText="Start from existing data" handle={existing}></MenuButton>
            <MenuButton btnText="Initialize system" handle={init}></MenuButton>
        </div>   
    )
}

export default withRouter(SelectStart);