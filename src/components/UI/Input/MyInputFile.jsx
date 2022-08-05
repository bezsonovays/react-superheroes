import React, {useState} from 'react';
import { useFormContext } from "react-hook-form";
//css
import './MyInputFile.css'
//icons
import {ReactComponent as Plus} from "../../../assets/plus.svg";


const MyInputFile = ({name, title}) => {

    return (
        <div className="file form__row">
            <div className="file__title form__title">{title}</div>
            <label htmlFor="file" className="file__input-custom">
                <Plus/>
            </label>
            <input
                type="file"
                accept="image/*"
                className="file__input form__input"
                id="file"
            />
            <div className="file__preview"></div>
        </div>
    )
};

export default MyInputFile;