import * as React from 'react';
import {IData} from "../components/loop-over/IData";
import {DataItem} from "../components/loop-over/DataItem";

type Data = {
    data: IData[];
};

export const LoopOver = ({data}: Data) => {
    const listData = () => data.map((dataItem, i) => {
        return <li key={i}><DataItem dataItem={dataItem}/></li>
    });

    return (
        <div>
            {listData()}
        </div>
    );
};