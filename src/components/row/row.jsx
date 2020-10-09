import React from 'react';
import PropTypes from 'prop-types';
import './row.css';

const Row = ({ left, right }) => {
    return (
        <div className="row">
            <div className="row--lg">
                { left }
            </div>
            <div className="row--sm">
                { right }
            </div>
        </div>
    );
};

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
};

export default Row;