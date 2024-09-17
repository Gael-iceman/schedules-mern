import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SchedulesContextProvider } from './context/ScheduleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SchedulesContextProvider>
      <App />
    </SchedulesContextProvider>
  </StrictMode>,
)
