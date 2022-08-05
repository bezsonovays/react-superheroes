import React from 'react';
import './FormButton.css'

const FormButton = ({value}) => {
    return (
        <div className="form__row form__row-btn">
            <input className="form__button" type="submit" value={value}/>
        </div>
    );
};

export default FormButton;