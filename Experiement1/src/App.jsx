import React from 'react'
import { useState } from 'react'
import Dashboard from './pages/dashboard'
import { Logs , LowCarbon} from './pages/logs'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header title="data"/>
        <Dashboard  />
        <Logs />
        <LowCarbon />
    </div>
  )
}

export default App
