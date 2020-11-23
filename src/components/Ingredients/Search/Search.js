import React, { memo } from 'react';

import Card from '../../UI/Card/Card';
import './Search.css';

const Search = memo(props => {
    return (
        <section className="search">
            <Card>
                <div className="search-input">
                    <label>Filter by Title</label>
                    <input type="text"/>
                </div>
            </Card>
        </section>
    );
});

export default Search;
