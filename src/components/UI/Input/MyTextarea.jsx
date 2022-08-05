import React from 'react';
import './MyInput.css';
import { useFormContext } from "react-hook-form";

const MyTextarea = ({name, title}) => {

    return (
        <div className="form__row">
            <div className="form__title">{title}</div>
            <textarea

                className="form__input form__input-textarea"
                name={name}/>
        </div>
    );
};

export default MyTextarea;