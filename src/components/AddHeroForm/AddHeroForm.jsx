import React, {useEffect, useRef, useState} from 'react';
import { useForm } from 'react-hook-form';
//router
import {useLocation, useNavigate} from "react-router-dom";
//helpers
import {heroService} from "../../services";
//components
import FormButton from "../UI/Button/FormButton";
import IconButton from "../UI/Button/IconButton";
import MyModal from "../UI/Modal/MyModal";
//css
import './AddHeroForm.css';
//icons
import {ReactComponent as Plus} from "../../assets/plus.svg";


const AddHeroForm = () => {
    const {state: id} = useLocation();
    const navigate = useNavigate();

    const [modal, setModal] = useState(true);
    const [imageSelected, setImageSelected] = useState(null);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const getHeroByID = async () => {
        const responce = await heroService.getByID(id);
        setValue('nickname', responce.nickname);
        setValue('catch_phrase', responce.catch_phrase)
        setValue('origin_description', responce.origin_description)
        setValue('real_name', responce.real_name)
        setValue('superpowers', responce.superpowers)
    }

    useEffect(() => {
        id && getHeroByID();
     },[])

    const onSubmit = (data) => {
        const formData = new FormData();
        const objData = Object.entries(data);
        objData.map(([key, value]) =>  formData.append(key, value));

        if (imageSelected) {
            const imgValues = Object.values(imageSelected);
            imgValues.map((value) => formData.append('images', value));
        }

        if (id) {
            heroService.updateById(id, formData)
                .then(({status, data})=>{
                console.log(status, data)
                status === 201 && navigate({pathname: '/', state: {data}})
            })
        } else {
            heroService.createHero(formData).then(({data, status})=>{
                status === 201 && navigate({pathname: '/', state: {data}})
            })
        }

        navigate({pathname: '/'})
    };

    return (
        <MyModal setVisible={setModal}>
            <form id="form" method='post' className="form"  onSubmit={handleSubmit(onSubmit)}>
                <div className="form__row">
                    <div className="form__title">Nickname</div>
                    <input
                       {...register("nickname", { required: true })}
                        className="form__input"
                        name="nickname"/>
                </div>

                <div className="form__row">
                    <div className="form__title">Real name:</div>
                    <input
                       {...register("real_name", { required: true })}
                        className="form__input"
                        name="real_name"/>
                </div>

                <div className="form__row">
                    <div className="form__title">Description:</div>
                    <textarea
                        {...register("origin_description", { required: true })}
                        className="form__input form__input-textarea"
                        name="origin_description"/>
                </div>

                <div className="form__row">
                    <div className="form__title">Superpowers:</div>
                    <input
                        {...register("superpowers", { required: true })}
                        className="form__input"
                        name="superpowers"/>
                </div>

                <div className="form__row">
                    <div className="form__title">Catch phrase:</div>
                    <input
                        {...register("catch_phrase", { required: true })}
                        className="form__input"
                        name="catch_phrase"/>
                </div>

                <div className="file form__row">
                    <div className="file__title form__title">Images:</div>
                    <label htmlFor="file" className="file__input-custom">
                        <IconButton background="#F0F1F7"><Plus/></IconButton>
                    </label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="file__input form__input"
                        id="file"
                        onChange={(e) => setImageSelected(e.target.files)
                    }
                    />
                    <div className="file__preview"></div>
                </div>
                <FormButton
                    value="Create"/>
            </form>
        </MyModal>
    );
};

export default AddHeroForm;