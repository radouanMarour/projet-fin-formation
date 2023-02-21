import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || null
    });

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])
    return (
        <StateContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);