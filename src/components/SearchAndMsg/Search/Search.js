<<<<<<< HEAD:src/components/SearchAndMsg/Search/Search.js
=======
import Modal from '../../Modal/ModalMenuButton'
>>>>>>> alerts:src/components/Search/Search.js
import React, {Component} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../../constants/apiContants';
import { withRouter } from "react-router-dom";
import SubmitButton from '../../InputFields/SubmitButton';
import TextInput from '../../InputFields/TextInput';
import ModalSearch from './ModalSearch';

class Search extends Component{
    
    state = {
        searchWord : "",
        displaySearchResults : [],
        // searchHistory : [],
        displaySearchHistory : [],
        successMessage : null
    };

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSearchHistory = this.handleSearchHistory.bind(this)
        
    }

    handleChange(e){
        const {id , value} = e.target
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    sendSearch(word){
        new Promise(() => {
            try{
                axios.get(API_BASE_URL+'search/'+word)
                    .then(response => {
                        if(response.status === 200){
                            console.log(response)
                            let result = response.data;
                            if(result && result[0] !== ""){
                                this.setState(prevState => ({
                                    ...prevState,
                                    'displaySearchResults' : result.map((event)=>{
                                        return (
                                            <div className="form-group">
                                                <label>{event}</label>
                                            </div>
                                        );
                                    })
                                }))
                            }
                            else { 
                                // result is undefined -> did not get a response from the server
                                this.setState(prevState => ({
                                    ...prevState,
                                    'displaySearchResults' :  ['']
                                }))
                            }
                        }
                    })
                    .catch(error => {
                        this.setState(prevState => ({
                            ...prevState,
                            'displaySearchResults' :  ['']
                        }))
                    })          
            } catch (e) {
               // rejected(e)
            }
        })
    }

    sendSearchHistory(){
        new Promise(() => {
            try{
                axios.get(API_BASE_URL+'watchsearchhistory')
                    .then(response => {
                        if(response.status === 200){
                            console.log(response)
                            let result = response.data;
                           // return list
                    //    }
                      //})
                    //   .then(list => {
                    //     this.setState(prevState => ({
                    //         ...prevState,
                    //         'gameDetails' : list
                    //     }))
                    //     return list;                
                    //   })
                    //.then(result => {
                        // verify the result is valid and not empty
                            if(result && result[0] !== ""){
                                this.setState(prevState => ({
                                    ...prevState,
                                    'displaySearchHistory' : result.map((event)=>{
                                        return (
                                            <div className="form-group">
                                                <label>{event}</label>
                                            </div>
                                        );
                                    })
                                }))
                            }
                            else { 
                                // result is undefined -> did not get a response from the server
                                this.setState(prevState => ({
                                    ...prevState,
                                    'displaySearchHistory' :  ['']
                                }))
                            }
                        }
                    })
                    .catch(error => {
                        this.setState(prevState => ({
                            ...prevState,
                            'displaySearchHistory' :  ['']
                        }))
                    })          
            } catch (e) {
               // rejected(e)
            }
        })
    }
    
    handleSearch(){
        if(this.state.searchWord.length) {
            this.sendSearch(this.state.searchWord)    
        }
    }

    handleSearchHistory(){
        this.sendSearchHistory()
    }

    body(){
        return(
            <div className="card col-12 col-lg-12 login-card mt-2 hv-center">
                <form>
                    <TextInput label="" id="searchWord" placeholder="Enter key word" state={this.state.searchWord} handleChange={this.handleChange}/>
                    <SubmitButton handleSubmitClick={this.handleSearch} buttonText="Search"/>
                    <div className="form-group text-left">
                    {this.state.displaySearchResults}
                    </div>
                    <SubmitButton handleSubmitClick={this.handleSearch} buttonText="View search history"/>
                    <div className="form-group text-center">
                    {this.state.displaySearchHistory}
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return(
            <ModalSearch buttonText="Search" Header="Search" Body= {this.body()}/>
        )
    }
}

export default withRouter(Search);