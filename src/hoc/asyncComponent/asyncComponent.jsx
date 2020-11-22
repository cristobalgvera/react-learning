import React, { useState, useEffect } from 'react';

const asyncComponent = ( importComponent ) => ( props ) => {
    const [Component, setComponent] = useState(null);
    useEffect(() => {
        importComponent().then(Component => setComponent(Component.default));
    }, []);
    return (Component && <Component {...props} />) || null;
};

export default asyncComponent;