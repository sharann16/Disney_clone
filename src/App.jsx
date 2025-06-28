import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#02051a] h-screen'>
        <Header/>
      </div>
    </>
  )
}

export default App
