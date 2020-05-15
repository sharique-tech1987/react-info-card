import React, {useState} from 'react';
import './MyContactInfo.css'
import MyModal from "../../MyModal";

function MyContactInfo(props){
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return(
        <div onClick={toggle} className="sk-contact">
            <h3>Contact Me? Click!</h3>
            <MyModal toggle={toggle} modal={modal} />
        </div>
    );
}

export default MyContactInfo;