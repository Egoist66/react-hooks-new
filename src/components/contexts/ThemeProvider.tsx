import { createContext, FC, useCallback, useMemo, useState } from "react";


type ContextProps = {
    mode?: 'dark' | 'light'
    toggleTheme?: () => void
}

export const ThemeContext = createContext<ContextProps>({mode: 'light'});





export const ThemeProvider: FC<{children: React.ReactNode}> = ({children}) => {

    const [theme, setTheme] = useState<ContextProps>({mode: 'light'});
    

    const toggleTheme = useCallback(() => {
        setTheme(theme.mode === 'light' ? {mode: 'dark'} : {mode: 'light'})
    }, [theme.mode])

    const value = useMemo(() => {
        return {
            mode: theme.mode,
            toggleTheme
        }
    }, [theme.mode])


    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}