import React from 'react';
import { connect } from 'react-redux';

import {
    BuildControls as BuildControlsClass,
    OrderButton,
} from './BuildControls.module.scss';

import BuildControl from './BuildControl/BuildControl';
import { calculatePrice } from '../../../store/actions/index';
import { useHistory } from 'react-router-dom';
import { SIGN_IN } from '../../Routes/path/path';

const BuildControls = (
    {
        purchasable,
        summarize,
        reduxState: { ingredients, price, localId },
        reduxActions: { updatePrice },
    },
) => {
    const history = useHistory();

    const updatePriceHandler = ( ingredient, amount ) => {
        updatePrice({
            ...ingredients,
            [ingredient]: ingredients[ingredient] + amount,
        });
    };

    const summarizeHandler = () => {
        if (localId) return summarize();
        else history.push(SIGN_IN);
    };

    return (
        <div className={BuildControlsClass}>
            <p>
                Price: <strong>${price}</strong>
            </p>
            {Object.keys(ingredients).map(( ingredient ) => (
                <BuildControl
                    key={ingredient}
                    label={ingredient}
                    ingredient={ingredient}
                    updatePrice={updatePriceHandler}
                />
            ))}
            <button
                disabled={!purchasable}
                className={OrderButton}
                onClick={() => summarizeHandler()}
            >
                {localId ? 'ORDER NOW' : 'SIGN IN TO ORDER'}
            </button>
        </div>
    );
};

const mapStateToProps = (
    {
        ingredientsReducer: { ingredients },
        priceReducer: { price },
        authReducer: { localId },
    },
) => ({
    reduxState: {
        ingredients: ingredients,
        price: price,
        localId: localId,
    },
});

const mapDispatchToProps = ( dispatch ) => ({
    reduxActions: {
        updatePrice: ( ingredients ) => dispatch(calculatePrice(ingredients)),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
