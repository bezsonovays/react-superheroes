import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../../pages/Home";
import HeroIdPage from "../../pages/HeroIdPage";
import AddHeroForm from "../AddHeroForm/AddHeroForm";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route  path="/"  element={<Home/>}>
                    <Route  path="form"  element={<AddHeroForm/>}/>
                </Route>
                <Route  path="/:id"  element={<HeroIdPage/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;