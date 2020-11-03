import * as React from 'react';
import {IData} from "./IData";

type TDataItem = {
    dataItem: IData;
};

export const DataItem = ({dataItem}: TDataItem) => {
    const {car, location, name} = dataItem;

    return (
        <p className={'data-item'}>
            <strong>{name}</strong>
            <strong>{location}</strong>
            {car}
        </p>
    );
};