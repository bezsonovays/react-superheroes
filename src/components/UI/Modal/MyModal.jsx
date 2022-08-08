import React from 'react';

import {useNavigate} from "react-router-dom";
import './MyModal.css';

const MyModal = ({children, visible, setVisible}) => {
    const navigate = useNavigate();

    const closeWindow = () => {
        setVisible(false);
        navigate({pathname: '/'})
    }
    return (
        <div className="modal active" onClick={closeWindow}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
    )
}

export default MyModal;