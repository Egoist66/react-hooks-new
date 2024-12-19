/// <reference types="vite/client" />


type ContextProps = {
    mode?: 'dark' | 'light'
    toggleTheme?: () => void
}