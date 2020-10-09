import React from 'react';
import TypeItem from '../type-item';
import './types-list.css';

const TypesList = ({ types }) => {
    const items = types.map((type) => {
        return (
            <li className="types-list__item" key={ type.id }>
                <TypeItem name={ type.name } />
            </li>
        );
    });

    return (
        <ul className="types-list">{ items }</ul>
    );
};

export default TypesList;