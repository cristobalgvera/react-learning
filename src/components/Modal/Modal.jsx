import React from 'react';

import './Modal.css';

const Modal = ( { closed } ) => (
    <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={closed}>Dismiss</button>
    </div>
);

export default Modal;