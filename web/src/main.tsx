import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HabitDay } from './components/habitDay'
import './index.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
