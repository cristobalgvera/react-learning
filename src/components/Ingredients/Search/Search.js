import React, { memo } from 'react';

import Card from '../../UI/Card/Card';
import styles from './Search.module.scss';

const Search = memo(() => (
    <section className={styles.search}>
        <Card>
            <div className={styles.searchInput}>
                <label>Filter by Title</label>
                <input type="text"/>
            </div>
        </Card>
    </section>
));

export default Search;
