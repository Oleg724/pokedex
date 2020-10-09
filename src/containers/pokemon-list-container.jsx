import React, { Fragment, Component } from 'react';
import { withPokeapiService, withData } from '../components/hocs';
import PokemonList from '../components/pokemons-list';
import Button from '../components/button';

class PokemonListContainer extends Component {

    state = {
        list: [],
    };

    componentDidMount() {
        const { data, onNextLinkUpdate } = this.props;

        this.setState({ 
            list: data.list
        });

        onNextLinkUpdate(data.next);
    };

    componentDidUpdate(prevProps, prevState) {
        const { data, url, onNextLinkUpdate, chunksOnPage } = this.props;

        if ( onNextLinkUpdate !== prevProps.onNextLinkUpdate 
            || url !== prevProps.url
            || data !== prevProps.data
            || chunksOnPage !== prevProps.chunksOnPage
            || this.state.list !== prevState.list) {

                this.setState({ 
                    list: data.list,
                    nextChunkList: url 
                });

                onNextLinkUpdate(data.next);
        };
    };

    render() {
        const { onItemSelected, onAddNextChunkOnPage } = this.props;

        return (
            <Fragment>
                <PokemonList list={ this.state.list } onItemSelected={ onItemSelected } />
                <Button onAddNextChunkOnPage={ onAddNextChunkOnPage } />
            </Fragment>
        );
    };
};

const mapPersonMethodsToProps = (pokeapiService) => {
    return {
        getData: pokeapiService.getPokemonsChunkList
    };
};

export default withPokeapiService(mapPersonMethodsToProps)(
    withData(PokemonListContainer));