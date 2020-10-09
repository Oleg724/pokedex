import { Component } from 'react';

export default class PokeapiService extends Component {

  _apiBase = 'https://pokeapi.co/api/v2/pokemon/?limit=12';

  getResource = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`)
    }
  
    return await response.json();
  };

  getPokemonsChunkList = async (url) => {
    let correctedUrl = url ? url : this._apiBase;

    const response = await this.getResource(correctedUrl);

    const list = await Promise.all(response.results.map(async (pokemon) => {
      return await this.getPokemon(this._extractId(pokemon));
    }));

    return {
      next: response.next,
      list: list
    };
  };

  getNextPokemonsChunkList = async (url) => {
    const response = await this.getResource(url);

    return await Promise.all(response.results.map(async (pokemon) => {
      return await this.getPokemon(this._extractId(pokemon));
    }));
  };

  getPokemon = async (id) => {
    const pokemon = await this.getResource(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return this._transformPokemon(pokemon);
  };

  getPokemonDetails = async (id) => {
    const pokemon = await this.getResource(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return this._transformPokemonDetails(pokemon);
  };
  
  _transformTypes = (types) => {
    return types.map((type) => { 
      return {
        id: type.slot, 
        name: type.type.name 
      };
    });
  };

  _transformPokemon = (pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      types: this._transformTypes(pokemon.types),
      image: pokemon.sprites.front_default
    };
  };

  _transformPokemonDetails = (pokemon) => {
    return {
      attack: pokemon.stats[1].base_stat,
      defence: pokemon.stats[2].base_stat,
      hp: pokemon.stats[0].base_stat,
      'SP attack': pokemon.stats[3].base_stat,
      'SP defense': pokemon.stats[4].base_stat,
      speed: pokemon.stats[5].base_stat,
      weight: pokemon.weight,
      'total moves': pokemon.moves.length,
    };
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]+)*\/$/;
    return item.url.match(idRegExp)[1];
  };
};