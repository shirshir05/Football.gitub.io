import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";
import {goBack} from '../Redirect/Redirect'
import SubmitButton from '../InputFields/SubmitButton';
import TextInput from '../InputFields/TextInput';

function SendComplaint(props){
    props.updateTitle('Send a Complaint')
    const [details , setDetails] = useState({
        complaint : "",
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
        const payload=`{
            complaintdescription:${details.complaint}
        }`
        axios.post(API_BASE_URL+'sendcomplaint', payload)
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
        if(details.complaint.length) {
            sendDetailsToServer(details.objectType)    
        } else {
            props.showError('Please enter a valid complaint');
        }
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <TextInput label="Your complaint:" id="complaint" placeholder="Enter complaint" state={details.complaint} handleChange={handleChange}/>
                <SubmitButton handleSubmitClick={handleSubmitClick} buttonText="Send"/>
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

export default withRouter(SendComplaint);