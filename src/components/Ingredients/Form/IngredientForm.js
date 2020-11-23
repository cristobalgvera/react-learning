import React, { memo, useState } from 'react';

import Card from '../../UI/Card/Card';
import styles from './IngredientForm.module.scss';
import { updateState } from '../../../common/updateState';

const IngredientForm = memo(( { addIngredient } ) => {
    const initialState = { title: '', amount: 0 };

    const [ingredient, setIngredient] = useState(initialState);
    const { title, amount } = ingredient;

    const submitHandler = ( event ) => {
        event.preventDefault();
        addIngredient(ingredient);
        setIngredient(initialState);
    };

    const handleChange = ( { target: { name: property, value } } ) => {
        setIngredient(prevState => updateState(prevState, { [property]: value }));
    };

    return (
        <section className={styles.ingredientForm}>
            <Card>
                <form onSubmit={submitHandler}>
                    <div className={styles.formControl}>
                        <label htmlFor="title">Name</label>
                        <input
                            type="text"
                            id="title"
                            name={'title'}
                            value={title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            name={'amount'}
                            value={amount}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.ingredientFormActions}>
                        <button
                            type="submit"
                            onClick={submitHandler}
                        >
                            Add Ingredient
                        </button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default IngredientForm;
