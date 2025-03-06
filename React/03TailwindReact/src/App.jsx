import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Areeba",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-800 text-black mb-6'>Tailwind Test</h1>
      <Card username="chaiaurcode"/>
      <Card/>
          
    </>
  )
}

export default App
