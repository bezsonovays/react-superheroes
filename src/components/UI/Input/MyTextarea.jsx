import React from 'react';
import './MyInput.css';
import { useFormContext } from "react-hook-form";

const MyTextarea = ({name, title}) => {
    const { register } = useFormContext();
    return (
        <div className="form__row">
            <div className="form__title">{title}</div>
            <textarea
                {...register(name)}
                className="form__input form__input-textarea"
                name={name}/>
        </div>
    );
};

export default MyTextarea;