import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span>Oops!</span>
            <span>something has gone wrong</span>
            <span>we will fix it soon</span>
        </div>
    );
};

export default ErrorIndicator;