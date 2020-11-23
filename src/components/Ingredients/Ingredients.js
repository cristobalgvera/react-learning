import React, { useCallback, useEffect, useState } from 'react';

import IngredientForm from './Form/IngredientForm';
import Search from './Search/Search';
import IngredientList from './List/IngredientList';
import { updateState } from '../../common/updateState';
import { ingredientsUrl } from '../../common/constants';

const Ingredients = () => {
    const [ingredients, setIngredients] = useState([]);

    const addIngredientHandler = async ( ingredient ) => {
        try {
            const response = await fetch(ingredientsUrl, {
                method: 'POST',
                body: JSON.stringify(ingredient),
                headers: { 'Content-Type': 'application/json' },
            });
            const { name } = await response.json();
            setIngredients(prevState => [...prevState, updateState(ingredient, { id: name })]);
        } catch (error) {
            console.error(error);
        }
    };

    const removeIngredientHandler = ( id ) => {
        setIngredients(prevState => prevState.filter(ingredient => ingredient.id !== id));
    };

    const filteredIngredientsHandler = useCallback(( filteredIngredients ) => {
        setIngredients(filteredIngredients);
    }, []);

    return (
        <div className="App">
            <IngredientForm addIngredient={addIngredientHandler}/>
            <section>
                <Search onLoadIngredients={filteredIngredientsHandler}/>
                <IngredientList
                    ingredients={ingredients}
                    onRemoveItem={removeIngredientHandler}
                />
            </section>
        </div>
    );
};

export default Ingredients;
