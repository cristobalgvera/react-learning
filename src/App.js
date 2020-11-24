import React, { useContext } from 'react';

import Auth from './containers/Auth/Auth';
import Ingredients from './components/Ingredients/Ingredients';
import { AuthContext } from './context/auth-context';

const App = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (isAuthenticated ? <Ingredients/> : <Auth/>);
};

export default App;
