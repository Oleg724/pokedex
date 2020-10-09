import React from 'react';
import { withPokeapiService, withSelectedData } from '../components/hocs';
import { PokemonPropertiesContainer } from '../containers';
import ItemDetails from '../components/item-details';

const PokemonDetailsContainer = ({ item }) => {
    return (
        <ItemDetails { ...item }>
            <PokemonPropertiesContainer types={ item.types } itemId={ item.id } />
        </ItemDetails>
    );
};

const mapMethodsToProps  = (pokeapiService) => {
    return {
        getData: pokeapiService.getPokemon
    };
};

export default withPokeapiService(mapMethodsToProps)(
    withSelectedData(PokemonDetailsContainer));