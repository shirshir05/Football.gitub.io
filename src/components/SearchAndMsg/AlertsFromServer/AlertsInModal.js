import { FaEnvelope } from 'react-icons/fa'
import React, {useState} from 'react'
import ModalWindow from '../../Modal/ModalWindow'
import axios from 'axios';
import {API_BASE_URL} from '../../../constants/apiContants'

function AlertsInModal(props) {
    const [alerts, setState] = useState({
      displayAlerts : ['No alerts to display']
    })
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);

    const handleShow = () => {
        // get alerts from server
      new Promise((resolved, rejected) => {
        try{
            axios.get(API_BASE_URL+sessionStorage.getItem("username")+'/returnalert', {withCredentials: true })
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
                  setState(prevState => ({
                      ...prevState,
                      'displayAlerts' : result.map((res)=>{
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
                  setState(prevState => ({
                      ...prevState,
                      'displayAlerts' :  ['No alerts to display']
                  }))
                }
              })
              .catch(error => {
                setState(prevState => ({
                  ...prevState,
                  'displayAlerts' :  ['No alerts to display']
                }))
              })          
          } catch (e) {
          }
      })
      setShow(true);
    } //handle show

    const body = () => {
      return (
        <div className="form-group text-left">
        {alerts.displayAlerts}
        </div>
      )
    }

    return (
        <>
        <button class="msgBtn" onClick={handleShow}>
          <FaEnvelope />
        </button>
        <ModalWindow show={show} handleClose={handleClose} Header={props.Header} Body={body()}/>
        </>
    );
  }
  
  export default AlertsInModal