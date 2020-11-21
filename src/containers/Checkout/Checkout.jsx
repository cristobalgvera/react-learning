import React from 'react';
import { connect } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import CheckoutSummary from '../../components/Burger/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { BURGER_BUILDER, CONTACT_DATA } from '../../components/Routes/path/path';

const Checkout = ( { reduxState: { ingredients } } ) => {
    const history = useHistory();

    const cancelledCheckoutHandler = () => {
        history.goBack();
    };

    const continuedCheckoutHandler = () => {
        const areEnoughIngredients =
            ingredients &&
            Object.values(ingredients).reduce(( acc, cur ) => acc + cur, 0) > 0;
        if (areEnoughIngredients) history.replace(CONTACT_DATA);
        else if (window.confirm('Add some ingredients!'))
            history.push(BURGER_BUILDER);
    };

    return (
        <>
            <CheckoutSummary
                cancelled={cancelledCheckoutHandler}
                continued={continuedCheckoutHandler}
            />
            <Route path={CONTACT_DATA} component={ContactData}/>
        </>
    );
};

const mapStateToProps = ( { ingredientsReducer: { ingredients } } ) => ({
    reduxState: { ingredients },
});

export default connect(mapStateToProps)(Checkout);
