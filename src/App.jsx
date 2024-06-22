import { useState } from 'react'

import './App.css'

import Cv from './components/Cv.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className=' max-w-full bg-black h-full w-full p-4 flex justify-center items-center'>    <Cv  /></div>

    </>
  )
}

export default App
