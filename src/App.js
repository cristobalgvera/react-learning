import React, { useState } from 'react';

import styles from './App.module.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

const App = () => {
    const [showModal, setShowModal] = useState(true);

    const handleModal = () => setShowModal(prevState => !prevState);

    return (
        <div className={styles.App}>
            <h1>React Animations</h1>
            <Modal show={showModal} closed={handleModal}/>
            <Backdrop show={showModal}/>
            <button className="Button" onClick={handleModal}>Open Modal</button>
            <h3>Animating Lists</h3>
            <List/>
        </div>
    );
};

export default App;
