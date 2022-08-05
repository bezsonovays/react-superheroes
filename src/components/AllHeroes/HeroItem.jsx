import React from 'react';
import './HeroItem.css';

const HeroItem = ({superhero}) => {
    return (
        // <div onClick={() => navigate({pathname: `/superheroes/${superhero.id}`, state: { superhero }})}>
            <article className="superhero">
                <div className="superhero__cell">
                    <img  className="superhero__icon" src={superhero.images[0]} alt={superhero.nickname} />
                </div>
                <div className="superhero__cell">
                    <h4 className="superhero__nickname">{superhero.nickname}</h4>
                </div>
            </article>
        // </div>
    );
};

export default HeroItem;