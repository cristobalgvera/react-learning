import React from 'react';
import { connect } from 'react-redux';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
import CheckoutSummary from '../../components/Burger/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout = ( { reduxState: { ingredients } } ) => {
    const { url } = useRouteMatch();
    const history = useHistory();

    const cancelledCheckoutHandler = () => {
        history.goBack();
    };

    const continuedCheckoutHandler = () => {
        const areEnoughIngredients =
            ingredients &&
            Object.values(ingredients).reduce(( acc, cur ) => acc + cur, 0) > 0;
        if (areEnoughIngredients) history.replace(`${url}/contact-data`);
        else if (window.confirm('Add some ingredients!'))
            history.push('/burger-builder');
    };

    return (
        <>
            <CheckoutSummary
                cancelled={cancelledCheckoutHandler}
                continued={continuedCheckoutHandler}
            />
            <Route path={`${url}/contact-data`} component={ContactData}/>
        </>
    );
};

const mapStateToProps = ( { ingredientsReducer: { ingredients } } ) => ({
    reduxState: { ingredients },
});

export default connect(mapStateToProps)(Checkout);
