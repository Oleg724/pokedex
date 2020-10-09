import React from 'react';
import TypesList from '../types-list';
import './pokemon-item.css';

const PokemonItem = ({ name, types, image }) => {
    return (
        <div className="pokemon-item">
            <div className="pokemon-item__img-wrapper">
                <img src={ image } alt={ name } className="pokemon-item__img"/>
            </div>         
            <p className="pokemon-item__title">{ name }</p>
            <TypesList types={ types } />
        </div>
    );
};

export default PokemonItem;