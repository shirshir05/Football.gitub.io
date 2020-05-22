import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";
import {goBack} from '../Redirect/Redirect'
import SubmitButton from '../InputFields/SubmitButton';

function AddLeague(props) {
    props.updateTitle('Creat a new league')
    const [leagueDetails , setDetails] = useState({
        name : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target
        setDetails(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        const payload={
            "name":leagueDetails.name,
        }
        axios.post(API_BASE_URL+'defineleague', payload)
            .then(function (response) {
                if(response.status === 200){
                    setDetails(prevState => ({
                        ...prevState,
                        'successMessage' : response.data
                    }))
                    props.showError(null)
                } else{
                    props.showError(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });   
    }
    const handleSubmitClick = () => {
        // e.preventDefault();
        if(leagueDetails.name.length) {
            sendDetailsToServer()    
        } else {
            props.showError('Please enter a valid name');
        }
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="inputName">League name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    value={leagueDetails.name}
                    onChange={handleChange}
                />
                {/* <small id="rolelHelp" className="form-text text-muted">i.e. Referee, Union Representitive, Coach, Player, Team Manager, Team Owner, Fan.</small> */}
                </div>                
                <SubmitButton handleSubmitClick={handleSubmitClick} buttonText="Create league"/>
            </form>
            <div className="alert alert-success mt-2" style={{display: leagueDetails.successMessage ? 'block' : 'none' }} role="alert">
                {leagueDetails.successMessage}
            </div>
            <div className="mt-2">
                <span className="loginText" onClick={() => goBack()}>Back to menu</span> 
            </div>            
        </div>
    )
}

export default withRouter(AddLeague);