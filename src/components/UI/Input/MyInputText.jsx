import React from 'react';
import './MyInput.css';
import { useFormContext } from "react-hook-form";

const MyInputText = ({name, title}) => {

    return (
        <div className="form__row">
            <div className="form__title">{title}</div>
            <input
                className="form__input"
                name={name}/>
        </div>
    );
};

export default MyInputText;