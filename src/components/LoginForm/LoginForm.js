import React, {useState} from 'react';
//import axios from 'axios';
import './LoginForm.css';
import {API_BASE_URL} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";
import {redirectToHome, redirectToRegister} from '../Redirect/Redirect'
import SubmitButton from '../InputFields/SubmitButton';


const axios = require('axios').default;
const tough = require('tough-cookie');
const axiosCookieJarSupport = require('../../axios-cookiejar-support-master');

axiosCookieJarSupport(axios);

const cookieJar = new tough.CookieJar();
axios.defaults.jar = cookieJar;
axios.defaults.withCredentials = true;


function LoginForm(props) {
    props.updateTitle('Login')
    const [state , setState] = useState({
        username : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const handleSubmitClick = () => {

    //    //  this should be removed:
    //     setState(prevState => ({
    //         ...prevState,
    //         'successMessage' : 'Login successful. Redirecting to home page..'
    //     }))
    //     redirectToHome(state.username,'');
    //     props.showError(null)
        
        // this will send the messag to the server when it will work:
        const payload=`{ 
            username: ${state.username},
            password: '${state.password}'
        }`

        axios.post(API_BASE_URL+'login', payload,{
            jar: cookieJar,
            withCredentials: true
        })
            .then(function (response) {
                const config = response.config;
                // axios.defaults.jar === config.jar
            console.log(config.jar.toJSON());
                console.log(cookieJar);
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    redirectToHome(state.username, response.data);
                    props.showError(null)
                }
                else{
                    props.showError(response.data);
                }
            })
            .catch(function (error) {
             
                console.log(cookieJar);
                console.log(error);
            });
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="text" 
                       className="form-control" 
                       id="username" 
                       placeholder="Enter username" 
                       value={state.username}
                       onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <SubmitButton handleSubmitClick={handleSubmitClick} buttonText="Submit"/>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Don't have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
            </div>
            <div className="mt-2">
                <span className="loginText" onClick={() => redirectToHome('','guest')}>Go to home page</span> 
            </div>   
        </div>
    )
}

export default withRouter(LoginForm);