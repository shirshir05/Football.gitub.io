import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";
import {goBack} from '../Redirect/Redirect'
import SubmitButton from '../InputFields/SubmitButton';
import NumberInput from '../InputFields/NumberInput';

function RegisterToGameAlert(props){
    props.updateTitle('Register to Game Alerts')
    const [details , setDetails] = useState({
        gameId : "",
        successMessage: null
    })
    const handleChange = (e) => {
        if(e.target.validity.valid){
            const {id , value} = e.target
            this.setState(prevState => ({
                ...prevState,
                [id] : value
            }))
        }
    }
    const sendDetailsToServer = () => {
        const payload=`{
            gamenumber:${details.gameId}
        }`
        axios.post(API_BASE_URL+sessionStorage.getItem("username")+'/registertogamealert', payload, {withCredentials: true })
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
        if(details.gameId.length) {
            sendDetailsToServer(details.objectType)    
        } else {
            props.showError('Please enter a valid game ID');
        }
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <NumberInput label="Enter game ID" id="gameId" placeholder="Enter in digits" state={details.gameId} handleChange={handleChange}/>
                <SubmitButton handleSubmitClick={handleSubmitClick} buttonText="Register"/>
            </form>
            <div className="alert alert-success mt-2" style={{display: details.successMessage ? 'block' : 'none' }} role="alert">
                {details.successMessage}
            </div>
            <div className="mt-2">
                <span className="loginText" onClick={() => goBack()}>Back to menu</span> 
            </div>            
        </div>
    )
}

export default withRouter(RegisterToGameAlert);