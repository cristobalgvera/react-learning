import React from 'react';
import PropTypes from 'prop-types';

const Char = ({char, remove}) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return (
        <div style={style} onClick={remove}>
            {char}
        </div>
    );
};

const {string, func} = PropTypes;
Char.propTypes = {
    char: string.isRequired,
    remove: func.isRequired,
};

export default Char;
