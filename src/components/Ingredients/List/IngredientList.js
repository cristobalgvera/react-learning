import React from 'react';

import styles from './IngredientList.module.scss';

const IngredientList = ( { ingredients, onRemoveItem } ) => (
    <section className={styles.ingredientList}>
        <h2>Loaded Ingredients</h2>
        <ul>
            {ingredients.map(( { amount, id, title } ) => (
                <li key={id} onClick={onRemoveItem.bind(this, id)}>
                    <span>{title}</span>
                    <span>{amount}x</span>
                </li>
            ))}
        </ul>
    </section>
);

export default IngredientList;
