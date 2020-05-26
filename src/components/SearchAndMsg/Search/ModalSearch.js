import { BsSearch } from 'react-icons/bs'
import React, {useState} from 'react'
import ModalWindow from '../../Modal/ModalWindow'

function ModalSearch(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <button class="msgBtn" onClick={handleShow}>
          <BsSearch />
        </button>
        <ModalWindow show={show} handleClose={handleClose} Header={props.Header} Body={props.Body}/>
        </>
    );
  }
  
  export default ModalSearch