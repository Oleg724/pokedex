import React from 'react';
import './table.css';

const Table = ({ typesList, list }) => {

    const renderTypesRow = (value) => {
        return (
            <tr key={ value }>
                <td>Type</td>
                <td>{ value }</td>
            </tr>
        );
    };

    const renderRow = ([ idx, [ name, value ]]) => {
        return (
            <tr key={ name }>
                <td>{ name }</td>
                <td>{ value }</td>
            </tr>
        );
    };

    return (
        <table className="table">
            <tbody>
                { typesList.map(renderTypesRow) }
                { Object.entries(list).map(renderRow) }
            </tbody>
        </table>
    );
};

export default Table;