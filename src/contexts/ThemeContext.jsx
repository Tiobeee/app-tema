import { createContext, useEffect, useState, useContext } from "react";
import { useColorScheme } from "react-native";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    //detecta qual tema está sendo usado
    // seja android, ios ou navegador
    const scheme = useColorScheme();
    // light or dark
    const [isDarkTheme, setIsDarkTheme] = useState(scheme === 'dark');

    //ele vai ficar escutando a variravel pra determinar se o usuario esta no modo dark
    // ou light

    useEffect(() => {
        setIsDarkTheme(scheme === 'dark');
    }, [scheme]);

    return(
        <ThemeContext.Provider
            value={{
              isDarkTheme,
              toggleTheme: () => setIsDarkTheme(!isDarkTheme)
            }}
        >
            {children}
        </ThemeContext.Provider>
      )
    
    }

export const useTheme = () => {
 useContext(ThemeContext);
}
    