import React, { Component } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiContants';
import {redirectToHome, gotoSelectStart} from '../Redirect/Redirect';
import { withRouter } from "react-router-dom";

class EmptyStart extends Component{
    
    constructor(props){
        super(props)
        axios.get(API_BASE_URL+'username/startfromscratch', {withCredentials: true })
        .then(response => {
            if(response.status === 200){
                //start the system from begining 
                gotoSelectStart('','')
                this.props.showError(null)
            } else{ 
                //dont start the system from scratch
                redirectToHome('','')
                this.props.showError(null)
            }
        })
        .catch(error => {
            console.log(error);
        });

    }

    render(){
        this.props.updateTitle('Welcome')
        return(
            <div className="mt-2">
                <h1>
                Redirecting to start page...
                </h1>
            </div>   
        )
    }
}

export default withRouter(EmptyStart);