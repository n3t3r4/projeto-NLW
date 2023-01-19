import { useState } from 'react'
import './App.css'
import './styles/global.css'
import reactLogo from './assets/react.svg'
import { Header } from './components/header'
import { SummaryTable } from './components/summaryTable'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen flex items-center">
      <div className='w-full max-w-5xl px-6 justify-center flex-col gap-16'>


      <Header />
      
      <SummaryTable />

      </div>
    </div>
  )
}

export default App
