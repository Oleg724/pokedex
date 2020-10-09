import React, { Component } from 'react';
import Spinner from '../spinner';

const withData = (View) => {
    return class extends Component {
  
      state = {
        data: null,
      };

      componentDidUpdate(prevProps) {
        const { getData, url, chunksOnPage } = this.props;

        if (getData !== prevProps.getData
          || chunksOnPage !== prevProps.chunksOnPage) {

          if (url !== prevProps.url && chunksOnPage !== prevProps.chunksOnPage) {
            this.update();
          }        
        }
      };
    
      componentDidMount() {
        this.update();
      };

      update() {
        const { getData, url } = this.props;

        getData(url)
          .then((data) => {
            this.setState({
              data,
            });
          });
      };
  
      render() {
        const { data } = this.state;
  
        if (!data) {
          return <Spinner />;
        }
    
        return <View { ...this.props } data={ data } />
      };
    };
  };

  export default withData;