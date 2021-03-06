import React, { createContext, useState, useContext } from "react";

const CountContext = createContext();

export function useCount() {
    const context = useContext(CountContext);
    if (!context) {
        throw new Error("useCount must be used within a CountProvider");
    }

    const { count, setCount } = context;

    return { count, setCount };
}

const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
};

export default CountProvider;