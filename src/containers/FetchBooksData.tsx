import * as React from 'react';
import {useState} from "react";
import Axios from "axios";
import {IBook} from "../components/books-data/IBook";
import {BooksList} from "../components/books-data/BooksList";

export const FetchBooksData = () => {
    const [books, setBooks] = useState<IBook[]>([]);

    const getBooks = async () => {
        const {data} = await Axios.get(`https://www.anapioficeandfire.com/api/books?pageSize=30`);
        setBooks(data);
    }

    return (
        <div>
            <h2>Game of Throne books</h2>
            <button onClick={getBooks}>Fetch data!</button>
            {books.length > 0 &&
            <BooksList books={books}/>
            }
        </div>
    );
};