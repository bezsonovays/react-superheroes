import React, {useState} from 'react';
//router
import {Link, Outlet} from "react-router-dom";
//components
import AllHeroes from "../components/AllHeroes/AllHeroes";
import MyButton from "../components/UI/Button/MyButton";
import MyModal from "../components/UI/Modal/MyModal";

const Home = () => {
    const [modal, setModal] = useState(false);
    return (
        <div className="container">
            <MyButton ><Link to={'form'}>Create Superhero</Link></MyButton>
            <Outlet/>
            <AllHeroes/>
        </div>
    );
};

export default Home;