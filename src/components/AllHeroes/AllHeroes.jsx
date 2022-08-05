import React, {useState, useEffect} from 'react';
//components
import Loader from "../UI/Loader/Loader";
import HeroItem from "./HeroItem";

//hooks
import {useFetching} from "../../hooks/useFetching";
//css
import './AllHerroes.css';
import './HeroItem.css';

const AllHeroes = () => {
    // const superheroes = [
    //     {
    //         id: 1,
    //         nickname: "Superman",
    //         realName: "Clark Kent",
    //         description: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction..",
    //         superpowers: "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
    //         phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    //         images: []
    //     },
    //     {
    //         id: 2,
    //         nickname: "Batman",
    //         realName: "John Tatore",
    //         description: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction..",
    //         superpowers: "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
    //         phrase: "it's a bird, it's a plane, it's Superman!",
    //         images: []
    //     },
    // ]

     const [superheroes, setSuperheroes] = useState([]);
     // const [fetchHeroes, isHeroesLoading, heroesError] = useFetching(async () => {
     //    const response = await PostService.getAll();
     //    setSuperheroes(response);
     // })

    // useEffect(() => {
    //     fetchHeroes();
    // }, [])

    return (
        <div className="list">
            <div className="list__header">
                <h4 className="list__title">All superheroes</h4>
            </div>

            {superheroes.length > 0 &&
                <>{superheroes.map(superhero => <HeroItem key={superhero.id} superhero={superhero}/> )}</>
                // <div className="list__block">
                //     {heroesError && <h2>Error: {heroesError}</h2>}
                //     <div className="list__users">
                //         {isHeroesLoading
                //             ? <Loader/>
                //             : <>{superheroes.length > 0 &&
                //                 <>{superheroes.map(superhero => <HeroItem key={superhero.id} superhero={superhero}/> )}</>
                //             }</>
                //         }
                //     </div>
                // </div>
            }


        </div>
    );
};

export default AllHeroes;