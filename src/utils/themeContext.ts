import { createContext, Dispatch, SetStateAction } from 'react';

type ThemeContextType = {
    fontFamily: string;
    setFontFamily: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);