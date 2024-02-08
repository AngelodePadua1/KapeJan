// UserContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const generateUserId = () => {
            return `anon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        };

        const newUserId = generateUserId();
        setUserId(newUserId);
    }, []);

    return (
        <UserContext.Provider value={{ userId }}>
            {children}
        </UserContext.Provider>
    );
};