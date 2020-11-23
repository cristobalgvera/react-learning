import React, { memo, useEffect, useRef, useState } from 'react';

import Card from '../../UI/Card/Card';
import styles from './Search.module.scss';
import { updateState } from '../../../common/updateState';
import { ingredientsUrl } from '../../../common/constants';

const Search = memo(( { onLoadIngredients } ) => {
        const [filter, setFilter] = useState('');
        const inputRef = useRef();

        useEffect(() => {
            const timer = setTimeout(() => {
                if (filter === inputRef.current.value) {
                    const queryParameters = filter.length === 0
                        ? ''
                        : `?orderBy="title"&equalTo="${filter}"`;

                    fetch(ingredientsUrl + queryParameters)
                        .then(response => response.json())
                        .then(ingredients => {
                            const _ingredients = [];
                            for (let key in ingredients) _ingredients.push(updateState(ingredients[key], { id: key }));
                            onLoadIngredients(_ingredients);
                        })
                        .catch(error => console.error(error));
                }
            }, 300);

            return () => clearTimeout(timer);
        }, [filter, onLoadIngredients, inputRef]);

        const handleFilterChange = ( { target: { value } } ) => {
            setFilter(value);
        };

        return (
            <section className={styles.search}>
                <Card>
                    <div className={styles.searchInput}>
                        <label>Filter by Title</label>
                        <input
                            ref={inputRef}
                            type="text"
                            value={filter}
                            onChange={handleFilterChange}
                        />
                    </div>
                </Card>
            </section>
        );
    })
;

export default Search;
