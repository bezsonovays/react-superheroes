import React from 'react';
import './IconButton.css';

const IconButton = (props) => {
    return (
        <div
            {...props}
            style={{backgroundColor: props.background}} className="icon__button">
                {props.children}
        </div>
    );
};

export default IconButton;