import React from 'react';
import PokemonItem from '../pokemon-item';
import './pokemons-list.css';

const PokemonsList = ({ list = [], onItemSelected }) => {
    const items = list.map((item) => {
        return (
            <li onClick={ () => onItemSelected(item.id) }
                className="pokemon-list__item" key={ item.id }>
                <PokemonItem { ...item } />
            </li>
        );
    });

    return (
        <ul className="pokemon-list">{ items }</ul>
    );
};

export default PokemonsList;