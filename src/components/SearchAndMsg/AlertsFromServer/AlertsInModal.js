import { FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa'
import React, {useState} from 'react'
import ModalWindow from '../../Modal/ModalWindow'
import axios from 'axios';
import {API_BASE_URL} from '../../../constants/apiContants'

function AlertsInModal(props) {
    let display = 'initial'
    if (props.show === false){
      display = 'none'
    }
    
    const [alerts, setState] = useState({
      displayAlerts : ['No alerts to display']
    })

    const [envelopeIcon, setEnvelope] = useState({
      icon : <FaEnvelopeOpen/>
    })

    const envelopeType = async() => {
      if(props.show !== false){
      try{
        let response = await axios.get(API_BASE_URL+sessionStorage.getItem("username")+'/alertnew', {withCredentials: true })
          if(response.status === 200){
            if(response.data && response.data.length > 0){
              // when the data length is > 0 then there is NO subscription.
              // do nothing
            }
            else{
              setEnvelope(prevState => ({
                ...prevState,
                'icon' : <FaEnvelope />
              }))
            }
          }
          else {
            setEnvelope(prevState => ({
              ...prevState,
              'icon' : <FaEnvelopeOpen/>
            }))
          }
      }catch{
        setEnvelope(prevState => ({
          ...prevState,
          'icon' : <FaEnvelopeOpen/>
        }))
      }
      }
    }

    setTimeout(envelopeType(), 10000000)

    const [show, setShow] = useState(false);    
    const handleClose = () => setShow(false);

    const handleShow = () => {
        // get alerts from server
      new Promise(() => {
        try{
            axios.get(API_BASE_URL+sessionStorage.getItem("username")+'/readallalrets', {withCredentials: true })
              .then(response => {
                if(response.status === 200){
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
        <button class="msgBtn" onClick={handleShow} style={{ display: display }}>
          {envelopeIcon.icon}
        </button>
        <ModalWindow show={show} handleClose={handleClose} Header={props.Header} Body={body()}/>
        </>
    );
  }
  
  export default AlertsInModal