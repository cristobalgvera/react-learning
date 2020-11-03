import * as React from 'react';
import {useState} from "react";

export const MoveABox = () => {
    const [y, setY] = useState(- window.pageYOffset / 4);

    return (
        <div>
            <h1>Move the box!</h1>
            <button onClick={() => setY(y - 30)}>👆 Move up 👆</button>
            <div className={"box"} style={{transform: `translateY(${y}px)`}}/>
        </div>
    );
};