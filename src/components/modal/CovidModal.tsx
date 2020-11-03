import * as React from 'react';
import {Button, Toast} from "react-bootstrap";
import {useState} from "react";

export const CovidModal = () => {
    const [showToast, setShowToast] = useState(false);

    const handleToast = () => {
        setShowToast(prevState => !prevState);
    };

    return (
        <>
            <Button hidden={showToast} onClick={handleToast}>Show modal</Button>
            <Toast show={showToast} onClose={handleToast}>
                <Toast.Header>
                    <img src="../../../public/logo192.png" className="rounded mr-2" alt=""/>
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
        </>
    );
};