import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initOrders } from '../../store/actions/index';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = ( {
                     reduxState: { orders, error, idToken },
                     reduxActions: { onInitOrders },
                 } ) => {
    useEffect(() => {
        onInitOrders(idToken);
    }, []);

    const ordersList = () =>
        orders.map(( order ) => {
            const { customer, ingredients, price, deliveryMethod, id } = order;
            return (
                <Order
                    key={id}
                    customer={customer}
                    deliveryMethod={deliveryMethod}
                    price={price}
                    ingredients={ingredients}
                />
            );
        });

    const ordersHelper = () =>
        !orders ? (
            error ? (
                <p style={{ textAlign: 'center' }}>There was an error fetching orders :/</p>
            ) : (
                <Spinner/>
            )
        ) : (
            <>
                {orders && ordersList()}
            </>
        );

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Orders</h1>
            {ordersHelper()}
        </>
    );
};

const mapStateToProps = ( { ordersReducer: { orders, error }, authReducer: { idToken } } ) => ({
    reduxState: {
        orders: orders,
        error: error,
        idToken: idToken,
    },
});

const mapDispatchToProps = ( dispatch ) => ({
    reduxActions: { onInitOrders: ( idToken ) => dispatch(initOrders(idToken)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
