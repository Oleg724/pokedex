import React from 'react';
import './item-details.css';

const ItemDetails = ({ id, image, name, children }) => {
    
    const getNumber = (num) => {
        if (num.toString().length >= 3) {
            return num;
        }

        const nullsArr = [0, 0, 0];
        const numArr = num.toString().split('');

        return [
            ...nullsArr.slice(0, nullsArr.length - numArr.length),
            ...numArr
        ];
    };

    return (
        <div className="item-details">
            <div className="item-details__image-wrapper">
                <img src={ image } alt={ name } className="item-details__img"/>
            </div>
            <h2 className="item-details__name">{ name } #{ getNumber(id) }</h2>  
            { children }
        </div>
    );
};

export default ItemDetails;