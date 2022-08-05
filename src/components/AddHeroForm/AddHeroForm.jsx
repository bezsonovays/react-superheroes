import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
//components
import MyInputText from "../UI/Input/MyInputText";
import FormButton from "../UI/Button/FormButton";
import MyTextarea from "../UI/Input/MyTextarea";
import MyInputFile from "../UI/Input/MyInputFile";
//css
import './AddHeroForm.css';



const AddHeroForm = () => {
    const [imageSelected, setImageSelected] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('file', imageSelected);

        // axios
        //     .post("http://localhost:3000/", formData, {
        //         headers: {
        //             "Content-type": "multipam startrt/form-data",
        //         },
        //     })
        //     .then((res) => {
        //         console.log(`Success` + res.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        console.log(data)
    };

    return (
            <form id="form" method='post' className="form"  onSubmit={handleSubmit(onSubmit)}>
                <input type="text"  {...register('test')}/>
                <MyInputText
                    title="Nickname:"
                    name="nickname" />
                <MyInputText
                    title="Real name:"
                    name="real_name" />
                <MyTextarea
                    title="Description:"
                    name="description" />
                <MyInputText
                     title="Superpowers:"
                    name="superpowers" />
                <MyInputText
                    title="Catch phrase:"
                    name="catch-phrase" />
                <MyInputFile
                    title="Images:"
                    name="images"
                    onChange={(e) => setImageSelected(e.target.files[0])}/>
                <FormButton
                    value="Create"/>
            </form>
    );
};

export default AddHeroForm;