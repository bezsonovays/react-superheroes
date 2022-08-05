import React from 'react';
import './MyButton.css';

const MyButton = ({children, ...props}) => {
    return (
        <div className="myBtn__wrapper">
            <button {...props} className="myBtn">{children}</button>
        </div>
    );
};

export default MyButton;