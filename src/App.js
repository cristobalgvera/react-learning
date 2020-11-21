import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Routes from './components/Routes/Routes';
import { checkAuthState } from './store/actions';

const App = ( { reduxState: { checked }, reduxActions: { onCheckAuthState } } ) => {
    useEffect(() => onCheckAuthState(), [onCheckAuthState]);

    return (
        <BrowserRouter>
            <Layout>
                {checked && <Routes/>}
            </Layout>
        </BrowserRouter>
    );
};

const mapStateToProps = ( { authReducer: { checked } } ) => ({
    reduxState: {
        checked,
    },
});

const mapDispatchToProps = ( dispatch ) => ({
    reduxActions: {
        onCheckAuthState: () => dispatch(checkAuthState()),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
