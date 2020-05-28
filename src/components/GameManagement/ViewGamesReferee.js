import React, {Component} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";
import {goBack} from '../Redirect/Redirect'

class ViewGamesReferee extends Component{
    
    state = {
        displayGamesList : ['You are not assigned to any game'],
        successMessage : null
    };

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)

        new Promise(() => {
            try{
                axios.get(API_BASE_URL+sessionStorage.getItem("username")+'/watchgame', {withCredentials: true })
                    .then(response => {
                        if(response.status === 200){
                            console.log(response)
                            let list = response.data;
                            return list
                        }                
                      })
                    .then(result => {
                        // verify the result is valid and not empty
                        if(result && result[0] !== ""){
                            this.setState(prevState => ({
                                ...prevState,
                                'displayGamesList' : result.map((res)=>{
                                    return (
                                        <div className="form-group">
                                            <label>{res}</label>
                                        </div>
                                    );
                                })
                            }))
                        }
                        else { 
                            // result is undefined -> did not get a response from the server
                            this.setState(prevState => ({
                                ...prevState,
                                'displayGamesList' :  ['You are not assigned to any game']
                            }))
                        }
                    })
                    .catch(error => {
                        this.setState(prevState => ({
                            ...prevState,
                            'displayGamesList' :  ['You are not assigned to any game']
                        }))
                    })          
            } catch (e) {
            }
        })
    }

    handleChange(e){
        const {id , value} = e.target
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    render() {
        this.props.updateTitle('View Games')
        return(
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <form>
                    <div className="form-group text-left">
                    <label className="row">Games you are assigned to:</label>
                    {this.state.displayGamesList}
                    </div>
                </form>
                <div className="mt-2">
                    <span className="loginText" onClick={() => goBack()}>Back to menu</span> 
                </div>            
            </div>
        )
    }
}

export default withRouter(ViewGamesReferee);