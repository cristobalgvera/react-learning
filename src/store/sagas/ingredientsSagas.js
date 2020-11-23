import { put } from 'redux-saga/effects';
import { ingredientsActionsSagas } from '../actions';
import axios from '../../services/axiosInstance';

const {
    setIngredients,
    fetchIngredientsFailed,
} = ingredientsActionsSagas;

const initIngredientsSaga = function* () {
    try {
        const { data: ingredients } = yield axios.get('/ingredients.json');
        yield put(setIngredients(ingredients));
    } catch (error) {
        yield put(fetchIngredientsFailed());
    }
};

export { initIngredientsSaga };