import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";


const HeroIdPage = () => {
    const [hero, setSetHero] = useState(null);
    const param = useParams();

    // const [fetchHeroById, isLoading, error] = useFetching( async (id) => {
    //     const response = await PostService.getByID(id);
    //     setSetHero(response)
    // });
    //
    // useEffect(() => {
    //     fetchHeroById(param.id);
    // }, [])

    return (
        <div>
            {console.log(hero)}
        </div>
    );
};

export default HeroIdPage;