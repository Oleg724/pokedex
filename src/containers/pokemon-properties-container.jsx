import React from 'react';
import { withPokeapiService, withSelectedData } from '../components/hocs';
import Table from '../components/table';

const PokemonPropertiesContainer = ({ types, item }) => {
    const typesList = Object.values(types).map(({ name }) => name);
    const list = [...Object.entries(item)];
    
    return (
        <Table typesList={ typesList } list={ list }/>
    );
};

const mapMethodsToProps  = (pokeapiService) => {
    return {
        getData: pokeapiService.getPokemonDetails
    };
};

export default withPokeapiService(mapMethodsToProps)(
    withSelectedData(PokemonPropertiesContainer));