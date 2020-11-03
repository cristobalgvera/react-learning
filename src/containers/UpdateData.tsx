import * as React from 'react';
import {useState} from "react";

export const UpdateData = () => {
    const initialData: { name: string; age: number } = {
        name: '',
        age: 0
    }

    const [data, setData] = useState(initialData);
    const {age, name} = data;

    const changeHandler = (property: string, value: string | number) => {
        setData(prevState => ({...prevState, [property]: value}));
    }

    return (
        <div>
            <p>
                <strong>Display name: </strong>{name}
                <br/>
                <strong>Display age: </strong>{age}
            </p>
            <label htmlFor={'name'}>Name:</label>
            <input name={'name'} type={'text'} value={name}
                   onChange={({target}) => changeHandler(target.name, target.value)}/>
            <label htmlFor={'age'}>Age:</label>
            <input name={'age'} type={'number'} min={0} value={age}
                   onChange={({target}) => changeHandler(target.name, target.valueAsNumber)}/>
        </div>
    );
};