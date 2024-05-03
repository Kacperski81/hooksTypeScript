import { useState, ReactNode } from 'react';
import { ThemeContext } from './themeContext';

export function ThemeContextProvider({children} : {children: ReactNode}) {
    const [fontFamily, setFontFamily] = useState("font-sans");

    return (
        <ThemeContext.Provider value={{fontFamily, setFontFamily}}>
            {children}
        </ThemeContext.Provider>
    )
}
