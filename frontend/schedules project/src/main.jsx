import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ScheduleContextProvider } from './context/ScheduleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScheduleContextProvider>
      <App />
    </ScheduleContextProvider>
  </StrictMode>,
)
