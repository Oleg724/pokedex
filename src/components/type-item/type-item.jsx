import React from 'react';
import './type-item.css';

const TypeItem = ({ name }) => {
    return (
        <div className="type-item" data-type={ name }>
            <p className="type-item__title">{ name }</p>
        </div>
    );
};

export default TypeItem;