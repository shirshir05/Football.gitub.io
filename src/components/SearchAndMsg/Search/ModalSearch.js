<<<<<<< HEAD
//import { BsSearch } from 'react-icons/bs'
=======
import { BsSearch } from 'react-icons/bs'
>>>>>>> alerts
import React, {useState} from 'react'
import ModalWindow from '../../Modal/ModalWindow'

function ModalSearch(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <button class="msgBtn" onClick={handleShow}>
<<<<<<< HEAD
=======
          <BsSearch />
>>>>>>> alerts
        </button>
        <ModalWindow show={show} handleClose={handleClose} Header={props.Header} Body={props.Body}/>
        </>
    );
  }
  
  export default ModalSearch