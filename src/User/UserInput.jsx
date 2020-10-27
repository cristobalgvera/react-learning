import React from 'react';
import PropTypes from 'prop-types';

const UserInput = ({changed, username}) => {
    return (
        <input
            type={'text'}
            className={'user-input'}
            maxLength={15}
            value={username}
            onChange={changed}
        />
    );
};

const {func, string} = PropTypes;
UserInput.propTypes = {
    changed: func.isRequired,
    username: string.isRequired,
};

export default UserInput;
