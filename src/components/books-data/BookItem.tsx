import * as React from 'react';
import {IBook} from "./IBook";

type Book = {
    book: IBook;
    index: number;
}

export const BookItem = ({book, index}: Book) => {
    const {released, numberOfPages, name, country, authors} = book;

    return (
        <li key={index}>
            <h4>Book {index}</h4>
            <h3>{name}</h3>
            <p>
                {authors.map(author => `🧑: ${author}`)}
                <br/>
                📖: {numberOfPages}
                <br/>
                🏠: {country}
                <br/>
                ⌚: {released}
                <br/>
            </p>
        </li>
    );
};