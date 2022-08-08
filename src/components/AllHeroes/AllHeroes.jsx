import React, {useState, useEffect} from 'react';
//router
import {useLocation} from "react-router-dom";
//components
import Loader from "../UI/Loader/Loader";
import HeroItem from "./HeroItem";
//hooks
import {useFetching} from "../../hooks/useFetching";
//helpers
import PostService from "../../http/index";
//css
import './AllHerroes.css';
import './HeroItem.css';


const AllHeroes = () => {
    const {state: hero} = useLocation();
    const [superheroes, setSuperheroes] = useState([]);
    const [fetchHeroes, isHeroesLoading, heroesError] = useFetching( async () => {
        const responce = await PostService.getData();
        setSuperheroes(responce)
    });

    useEffect( () => {
        fetchHeroes();
    }, [hero]);

    const deleteHeroById = (id) => {
        PostService.deleteByID(id).then((res)=>{
            if (res.status === 204) {
                setSuperheroes(superheroes.filter((hero) => hero._id !== id));
            }
        })
    }

    return (
        <div className="list">
            <div className="list__header">
                <h4 className="list__title">All superheroes</h4>
            </div>
            {superheroes.length > 0 &&
                <div className="list__block">
                    {heroesError && <h2>Error: {heroesError}</h2>}
                    <div className="list__users">
                        {isHeroesLoading
                            ? <Loader/>
                            : <>{superheroes.length > 0 &&
                                <>{superheroes.map(superhero =>
                                    <HeroItem
                                        key={superhero._id}
                                        superhero={superhero}
                                        deleteHeroById={deleteHeroById}
                                        /> )}</>
                            }</>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default AllHeroes;