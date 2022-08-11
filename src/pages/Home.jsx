import React from 'react';
//router
import {Link, Outlet} from "react-router-dom";
//components
import AllHeroes from "../components/AllHeroes/AllHeroes";
import MyButton from "../components/UI/Button/MyButton";

const Home = () => {
    return (
        <div className="container">
            <MyButton ><Link to={'form'}>Create Superhero</Link></MyButton>
            <Outlet/>
            <AllHeroes/>
        </div>
    );
};

export default Home;