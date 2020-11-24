import React, { createContext, useState } from 'react';

const AuthContext = createContext({
    isAuthenticated: false,
    handleLogin: () => {
    },
});

const AuthContextProvider = ( { children } ) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => setIsAuthenticated(true);

    return (
        <AuthContext.Provider value={{
            isAuthenticated: isAuthenticated,
            handleLogin: handleLogin,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };
export default AuthContextProvider;