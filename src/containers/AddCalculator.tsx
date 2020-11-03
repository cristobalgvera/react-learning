import * as React from 'react';
import {useState} from "react";

export const AddCalculator = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);

    const [sum, setSum] = useState<number>();

    const addThem = () => {
        setSum(firstNumber + secondNumber);
    }

    return (
        <div>
            <h2>Adding two numbers</h2>
            <input type={'number'} onChange={({target}) => setFirstNumber(target.valueAsNumber)}/>
            <input type={'number'} onChange={({target}) => setSecondNumber(target.valueAsNumber)}/>
            <br/>
            <button onClick={addThem}>Add them!</button>
            {sum !== undefined &&
            <h3>{sum}</h3>}
        </div>
    );
};