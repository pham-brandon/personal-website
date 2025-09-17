import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function ThemeInitializer() {
  useEffect(() => {
    // Remove any existing theme preference
    localStorage.removeItem('theme');
    // Add dark class to html element
    document.documentElement.classList.add('dark');
  }, []);
  
  return null;
}

function AppWithTheme() {
  return (
    <StrictMode>
      <ThemeInitializer />
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<AppWithTheme />)
