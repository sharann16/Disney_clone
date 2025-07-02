import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Slider from './Component/Slider'
import Production from './Component/Production'
import MovieByGerner from './Component/MovieByGerner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#02051a] h-full'>
        <Header/>
        <Slider/>
        <Production/>
        <MovieByGerner/>
      </div>
    </>
  )
}

export default App
