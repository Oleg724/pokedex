import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundry from '../error-boundry';
import PokeapiService from '../../services/pokeapi-service';
import { PokeapiServiceProvider } from '../pokeapi-service-context';
import { PokemonPage } from '../pages';
import Header from '../header';
import './app.css';

export default class App extends Component {

  state = {
    hasError: false,
    pokeapiService: new PokeapiService(),
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <PokeapiServiceProvider value={ this.state.pokeapiService }>
          <Router basename="/pokedex">
            <div className="app">
              <Header />
              <Switch>
                <Route path="/" component={ PokemonPage } exact />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </PokeapiServiceProvider>
      </ErrorBoundry>
    );
  };
};