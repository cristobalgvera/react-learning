import * as React from 'react';
import {useEffect, useState} from "react";
import Axios from "axios";
import ICard from "../components/line-service/ICard";
import {LineService} from "../components/line-service/LineService";
import {CardDeck} from 'react-bootstrap';

const uri = `https://run.mocky.io/v3/738598e3-2a1c-48a8-8cde-13c2813e956a`;

export const LineServices = () => {
    const getServices: () => Promise<ICard[]> = async () => {
        const {data} = await Axios.get(uri);
        return data;
    };

    const [isLoading, setLoading] = useState(true);

    const [services, setServices] = useState<ICard[]>([]);
    const [servicesList, setServicesList] = useState<JSX.Element[]>([]);

    useEffect(() => {
        getServices()
            .then(r => setServices(r))
            .then(() => setServicesList(services.map((service: ICard, i: number) => <LineService key={i}
                                                                                                 card={service}/>)))
            .catch((e) => console.log(e));

        return () => setLoading(false);
    }, [services]);


    return (
        <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
            {isLoading ? 'Loading...' : servicesList}
        </CardDeck>
    );
};