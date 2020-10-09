import React, { Component } from 'react';

const withSelectedData = (View) => {
  return class extends Component {

    state = {
      item: null,
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        const { itemId, getData } = this.props;

        if (itemId !== prevProps.itemId
            || getData !== prevProps.getData) {

                this.updateItem();
        }
    };

    updateItem() {
        const { itemId, getData } = this.props;

        if (!itemId) {
          return;
        }

        getData(itemId)
            .then(item => {
                this.setState({
                    item: item,
                });
            });
    };
  
      render() {
        const { item } = this.state;
  
        if (!item) {
          return '';
        }
    
        return <View { ...this.props } item={ item } />
      };
    };
  };

  export default withSelectedData;