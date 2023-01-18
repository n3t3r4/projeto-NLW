import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Habit } from './components/habits'
import './index.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
    <Habit completed={1}/>
    <Habit completed={2}/>
    <Habit completed={1}/>
    <Habit completed={2}/>
    </div>
  </React.StrictMode>,
)
