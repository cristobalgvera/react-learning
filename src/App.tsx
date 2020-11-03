import React from 'react';
import './App.css';
import {CovidModal} from "./components/modal/CovidModal";
import {LineServices} from "./containers/LineServices";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <CovidModal/>
                <hr/>
                <LineServices/>
            </div>
        </BrowserRouter>
    );
}

export default App;
