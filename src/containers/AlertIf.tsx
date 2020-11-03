import * as React from 'react';
import {useEffect, useState} from "react";

const secretSentence = 'secret sentence';

export const AlertIf = () => {
    const [sentence, setSentence] = useState('');

    useEffect(() => {
        if (sentence === secretSentence)
            alert('You may pass!');
    }, [sentence]);

    return (
        <div>
            <input type={'text'} placeholder={'Write the secret sentence 😉'}
                   onChange={({target}) => setSentence(target.value)}/>
        </div>
    );
};