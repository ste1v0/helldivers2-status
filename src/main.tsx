import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { LoadingContextProvider } from './context/loading-context.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <LoadingContextProvider>
        <App />
    </LoadingContextProvider>
)
