import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PokemonDetailsContainer, PokemonListContainer } from '../../containers';
import Row from '../row';

class PokemonPage extends Component {

    state= {
        selectedItem: null,
        nextListChunkLink: null,
        chunksOnPage: 1
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    onNextLinkUpdate = (url) => {
        this.setState({ 
            nextListChunkLink: url,
        });
    };

    onAddNextChunkOnPage = () => {
        this.setState((prevState) => { 
            return {
                chunksOnPage: prevState.chunksOnPage + 1,
                selectedItem: null
            };
        });
    };

    render() {
        const { nextListChunkLink, selectedItem, chunksOnPage } = this.state;
        let url = chunksOnPage !== 1 ? nextListChunkLink : '';

        const pokemonListContainer = (
            <PokemonListContainer 
                    onItemSelected={ this.onItemSelected } 
                    onNextLinkUpdate={ this.onNextLinkUpdate }
                    url={ url } 
                    onAddNextChunkOnPage={ this.onAddNextChunkOnPage }
                    chunksOnPage={ chunksOnPage } />
        );

        const pokemonDetailsContainer = (
            selectedItem 
                ? <PokemonDetailsContainer itemId={ selectedItem } />
                : ''
        );

        return (
            <Row
                left={ pokemonListContainer }
                right={ pokemonDetailsContainer } />
        );
    };
};

export default withRouter(PokemonPage);