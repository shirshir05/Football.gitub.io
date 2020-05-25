import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import ModalWindow from './ModalWindow';

function ModalMenuButton(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" size="lg" block onClick={handleShow}>
          {props.buttonText}
        </Button>
        <ModalWindow show={show} handleClose={handleClose} Header={props.Header} Body={props.Body}/>
        </>
    );
  }
  
  export default ModalMenuButton