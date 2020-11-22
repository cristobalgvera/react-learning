import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from '../../../services/axios-orders';
import Button from '../../../components/UI/Button/Button';

import { ContactData as ContactDataStyle } from './ContactData.module.scss';
import { useHistory } from 'react-router-dom';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Form/Input/Input';
import { resetPrice, resetIngredients } from '../../../store/actions/index';
import { updateState } from '../../../shared/utility';
import { BURGER_BUILDER, SIGN_IN } from '../../../components/Routes/path/path';

const initialContactData = {
    name: '',
    email: '',
    address: {
        street: '',
        postalCode: '',
    },
};

const ContactData = (
    {
        reduxState: {
            ingredients,
            price,
            idToken,
            localId,
        },
        reduxActions: { onCheckout },
    },
) => {
    const history = useHistory();
    const [contactData, setContactData] = useState({ ...initialContactData });
    const [loading, setLoading] = useState(false);
    const [deliveryMethod, setDeliveryMethod] = useState('fastest');

    const handleFormChange = ( property, value ) => {
        let updatedContactData = { ...contactData };

        if (!Object.keys(updatedContactData).includes(property)) {
            setContactData(( prevState ) => updateState(prevState, {
                    address: updateState(prevState['address'], {
                        [property]: value,
                    }),
                }),
            );
            return;
        }

        setContactData(( prevState ) => updateState(prevState, { [property]: value }));
    };

    const handleFormSubmit = ( event ) => {
        event.preventDefault();
        setLoading(true);
        if (!ingredients) {
            window.alert(
                'Invalid order, there are no ingredients, you\'ll be redirected',
            );
            history.push(BURGER_BUILDER);
        }

        if (idToken) {
            const data = {
                ingredients: ingredients,
                price: price,
                customer: contactData,
                deliveryMethod: deliveryMethod,
                localId: localId,
            };

            ingredients &&
            axios
                .post(`/orders.json?auth=${idToken}`, data)
                .then(( response ) => console.log(response))
                .catch(( error ) => console.log(error))
                .finally(() => {
                    if (window.alert('Order ready!') || true) {
                        setLoading(false);
                        onCheckout();
                        history.push(BURGER_BUILDER);
                    }
                });
        } else {
            if (window.confirm('You must be logged, wanna log in?'))
                history.push(SIGN_IN);

            setLoading(false);
        }
    };

    const {
        name,
        email,
        address: { street, postalCode },
    } = contactData;
    const formHelper = () =>
        loading ? (
            <Spinner/>
        ) : (
            <form>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    change={handleFormChange}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    change={handleFormChange}
                />
                <Input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={street}
                    change={handleFormChange}
                />
                <Input
                    type="text"
                    name="postalCode"
                    placeholder="Postal code"
                    value={postalCode}
                    change={handleFormChange}
                />
                <div>
                    <label htmlFor="deliveryMethod">
                        <strong>Delivery Method</strong>
                    </label>
                    <br/>
                    <select
                        name="deliveryMethod"
                        value={deliveryMethod}
                        onChange={( { target: { value } } ) => setDeliveryMethod(value)}
                    >
                        <option value="fastest">Fastest</option>
                        <option value="cheapest">Cheapest</option>
                    </select>
                </div>
                <Button type="Success" clicked={handleFormSubmit}>
                    ORDER
                </Button>
            </form>
        );

    return (
        <div className={ContactDataStyle}>
            <h4>Enter your contact data</h4>
            {formHelper()}
        </div>
    );
};

const { number, shape } = PropTypes;
ContactData.propTypes = {
    reduxState: shape({
        ingredients: shape({
            salad: number,
            bacon: number,
            cheese: number,
            meat: number,
        }).isRequired,
        price: number.isRequired,
    }).isRequired,
};

const mapStateToProps = (
    {
        ingredientsReducer: { ingredients },
        priceReducer: { price },
        authReducer: { idToken, localId },
    },
) => ({
    reduxState: {
        ingredients,
        price,
        idToken,
        localId,
    },
});

const mapDispatchToProps = ( dispatch ) => ({
    reduxActions: {
        onCheckout: () => {
            dispatch(resetIngredients());
            dispatch(resetPrice());
        },
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);