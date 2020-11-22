import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes/Routes';
import NavigationItems from './components/NavigationItems/NavigatonItems';

const App = () => (
    <BrowserRouter>
        <NavigationItems/>
        <Routes/>
    </BrowserRouter>
);

export default App;
