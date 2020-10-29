import React from 'react';
import PropTypes from 'prop-types';

const UserOutput = ({username}) => {
    return (
        <p className={'user-output-p'}>{username}</p>
    );
};

const {string} = PropTypes;
UserOutput.propTypes = {
    username: string.isRequired,
};

export default UserOutput;

