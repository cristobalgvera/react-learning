import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import IngredientForm from './Form/IngredientForm';
import Search from './Search/Search';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import IngredientList from './List/IngredientList';
import { firebaseUrl } from '../../common/constants';
import { INGREDIENTS_ACTIONS } from '../../store/actions/actionTypes';
import { ingredientsActions } from '../../store/actions/index';
import ingredientsReducer, { initialIngredientsState } from '../../store/reducers/ingredientsReducer';
import { updateState } from '../../common/updateState';
import useHttp, { HTTP_METHODS } from '../../hooks/http';

const { setIngredients, removeIngredient, addIngredient } = ingredientsActions;
const { DELETE, POST } = HTTP_METHODS;
const { INGREDIENT_ADD, INGREDIENT_REMOVE } = INGREDIENTS_ACTIONS;

const Ingredients = () => {
    const [ingredients, dispatchIngredients] = useReducer(
        ingredientsReducer,
        initialIngredientsState,
    );

    const {
        data: { data, error, loading, extra, id },
        calls: { sendRequest, clearRequest },
    } = useHttp();

    useEffect(() => {
        if (!error) {
            if (id === INGREDIENT_REMOVE)
                dispatchIngredients(removeIngredient(extra));
            else if (id === INGREDIENT_ADD)
                dispatchIngredients(addIngredient(updateState(extra, { id: data.name })));
        }
    }, [data, extra, id, error]);

    const addIngredientHandler = useCallback(( ingredient ) => {
        sendRequest(
            `${firebaseUrl}/ingredients.json`,
            POST,
            JSON.stringify(ingredient),
            ingredient,
            INGREDIENT_ADD,
        );
    }, [sendRequest]);

    const removeIngredientHandler = useCallback(( id ) => {
        sendRequest(
            `${firebaseUrl}/ingredients/${id}.json`,
            DELETE,
            null,
            id,
            INGREDIENT_REMOVE,
        );
    }, [sendRequest]);

    const handleSetIngredients = useCallback(( ingredients ) => {
        dispatchIngredients(setIngredients(ingredients));
    }, []);

    const ingredientsList = useMemo(() => (
        <IngredientList
            ingredients={ingredients}
            onRemoveItem={removeIngredientHandler}
        />
    ), [ingredients, removeIngredientHandler]);

    return (
        <div className="App">
            {error && <ErrorModal onClose={clearRequest}>{error}</ErrorModal>}
            <IngredientForm
                addIngredient={addIngredientHandler}
                loading={loading}
            />
            <section>
                <Search setIngredients={handleSetIngredients}/>
                {ingredientsList}
            </section>
        </div>
    );
};

export default Ingredients;
