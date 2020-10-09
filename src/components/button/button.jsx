import React from 'react';
import './button.css';

const Button = ({ onAddNextChunkOnPage }) => {
    return (
        <button className="btn" type="button"
            onClick={ () => onAddNextChunkOnPage() }>
            Load More
        </button>
    );
};

export default Button;