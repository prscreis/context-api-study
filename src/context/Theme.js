import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const themes = [
    {
        name: "dark",
        colors: {
            background: "black",
            text: "white"
        }
    },
    {
        name: "white",
        colors: {
            background: "white",
            text: "black"
        }
    },
];

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    const { theme, setTheme } = context;

    return { theme, setTheme };
}

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes[0]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;