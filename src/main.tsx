import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './components/App'
import { ThemeProvider } from './components/contexts/ThemeProvider'

createRoot(document.getElementById('root')!)
.render( 
    <>
    
        <ThemeProvider>
            <App />
        </ThemeProvider>
    
    
    </>
)
