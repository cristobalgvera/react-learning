import React, { useEffect, useState } from 'react';

const asyncComponent = ( importComponent ) => ( props ) => {
    const [Component, setComponent] = useState();
    useEffect(() => importComponent().then(( { default: def } ) => setComponent(def)), []);
    return (Component && <Component {...props} />) || null;
};

export default asyncComponent;