import React, { Fragment, Component } from 'react';
import { withPokeapiService, withData } from '../components/hocs';
import PokemonList from '../components/pokemons-list';
import Button from '../components/button';

class PokemonListContainer extends Component {

    state = {
        list: [],
    };

    updateList(propsList) {
        const { list } = this.state;
        const lastListItemId = list[list.length - 1].id;
        const lastPropsListItemId = propsList[propsList.length - 1].id;

        if (lastListItemId === lastPropsListItemId) {
            return list;
        }

        return [
            ...list,
            ...propsList
        ]
    }

    componentDidMount() {
        const { data, onNextLinkUpdate } = this.props;

        this.setState({ 
            list: data.list
        });

        onNextLinkUpdate(data.next);
    };

    componentDidUpdate(prevProps, prevState) {
        const { data, onNextLinkUpdate, chunksOnPage } = this.props;

        if ( onNextLinkUpdate !== prevProps.onNextLinkUpdate 
            || data.list !== prevProps.data.list
            || data.next !== prevProps.data.next
            || chunksOnPage !== prevProps.chunksOnPage) {

                this.setState({ 
                    list: this.updateList(data.list),
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