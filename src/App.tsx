import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex text-green-800 h-10 w-10 bg-blue-700 rounded-full items-center justify-center'> Hi</div>
    </>
  )
}

export default App

