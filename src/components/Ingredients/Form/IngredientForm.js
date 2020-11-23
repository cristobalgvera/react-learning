import React, { memo } from 'react';

import Card from '../../UI/Card/Card';
import styles from './IngredientForm.module.scss';

const IngredientForm = memo(() => {
    const submitHandler = event => {
        event.preventDefault();
        // ...
    };


    return (
        <section className={styles.ingredientForm}>
            <Card>
                <form onSubmit={submitHandler}>
                    <div className={styles.formControl}>
                        <label htmlFor="title">Name</label>
                        <input type="text" id="title"/>
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount"/>
                    </div>
                    <div className={styles.ingredientFormActions}>
                        <button type="submit">Add Ingredient</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default IngredientForm;
