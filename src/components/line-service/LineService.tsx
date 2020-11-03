import * as React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ICard from "./ICard";

type TCard = {
    card: ICard;
}

export const LineService = ({card: {icon, title, url}}: TCard) => {
    return (
        <Link to={url}>
            <Card style={{flex: 1}}>
                <Card.Img variant={"top"} src={icon} alt={title}/>
                <Card.Body>{title}</Card.Body>
            </Card>
        </Link>
    );
};