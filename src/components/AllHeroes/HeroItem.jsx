import React from 'react';
//router
import {Link, useNavigate} from "react-router-dom";
//css
import './HeroItem.css';
import IconButton from "../UI/Button/IconButton";
//icons
import {ReactComponent as Delete} from "../../assets/delete.svg";
import {ReactComponent as Edit} from "../../assets/edit.svg";


const HeroItem = ({superhero, deleteHeroById}) => {
    const {image, nickname, _id} = superhero;
    const navigate = useNavigate();
    const goHeroIdPage = () => {
        navigate({pathname: `/heroes/${superhero._id}`, state: { superhero }});
    }

    return (
            <article className="superhero"  onClick={goHeroIdPage} >
                <div className="superhero__block">
                    <div className="superhero__cell">
                        <img  className="superhero__icon" src={image} alt={nickname} />
                    </div>
                    <div className="superhero__cell">
                        <h4 className="superhero__nickname">{nickname}</h4>
                    </div>
                </div>
                <div className="superhero__block buttons">
                    <button onClick={(e) => {
                         deleteHeroById(_id)}}>
                        <IconButton background="rgba(241, 43, 44, .3)"><Delete/></IconButton>
                    </button>
                    <button><Link to={'form'} state={_id }>
                        <IconButton background="rgba(41, 204, 151, .3)"><Edit/></IconButton>
                    </Link></button>
                </div>
            </article>
    );
};

export default HeroItem;