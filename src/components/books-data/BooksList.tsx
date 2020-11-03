import * as React from 'react';
import {IBook} from "./IBook";
import {BookItem} from "./BookItem";

type Books = {
    books: IBook[];
}

export const BooksList = ({books}: Books) => {
    const listBooks = () => books.map((book, i) => <BookItem key={i+1} book={book} index={i+1}/>);

    return (
        <ul>
            {listBooks()}
        </ul>
    );
};