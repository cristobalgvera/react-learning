import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const Validation = ({textLength}) => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage(() => {
            if (textLength < 5) return 'Text too short';
            else if (textLength > 15) {
                return 'Text long enough';
            }
            return 'Text is fine';
        })
    }, [textLength]);

    return (
        <p>
            {message}
        </p>
    );
};

const {number} = PropTypes;
Validation.propTypes = {
    textLength: number.isRequired,
};

export default Validation;
