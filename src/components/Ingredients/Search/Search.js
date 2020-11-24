import React, { memo, useEffect, useRef, useState } from 'react';
import Card from '../../UI/Card/Card';
import LoadingIndicator from '../../UI/LoadingIndicator/LoadingIndicator';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import styles from './Search.module.scss';
import { firebaseUrl } from '../../../common/constants';
import { updateState } from '../../../common/updateState';
import useHttp, { HTTP_METHODS } from '../../../hooks/http';

const { GET } = HTTP_METHODS;

const Search = memo(( { setIngredients } ) => {
        const [filter, setFilter] = useState('');
        const inputRef = useRef();

        const {
            data: { loading, data, error },
            calls: { sendRequest, clearRequest },
        } = useHttp();

        useEffect(() => {
            const timer = setTimeout(() => {
                if (filter === inputRef.current.value) {
                    const queryParameters = filter.length === 0
                        ? ''
                        : `?orderBy="title"&equalTo="${filter}"`;
                    sendRequest(`${firebaseUrl}/ingredients.json${queryParameters}`, GET);
                }
            }, 300);

            return () => clearTimeout(timer);
        }, [filter, inputRef, sendRequest]);

        useEffect(() => {
            if (!error) {
                const _ingredients = [];
                for (let key in data) if (data.hasOwnProperty(key))
                    _ingredients.push(updateState(data[key], { id: key }));
                setIngredients(_ingredients);
            }
        }, [data, error, setIngredients]);

        const handleFilterChange = ( { target: { value } } ) => {
            setFilter(value);
        };

        return (
            <section className={styles.search}>
                {error && <ErrorModal onClose={clearRequest}>{error}</ErrorModal>}
                <Card>
                    <div className={styles.searchInput}>
                        <label>Filter by Title</label>
                        {loading && <LoadingIndicator/>}
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
