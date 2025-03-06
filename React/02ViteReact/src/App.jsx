import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter, setCounter] = useState(15)

  // let counter = 15
  const addValue = () =>{
    // counter = counter + 1
    if(counter == 20){
      setCounter(counter = 20)
    }
    else{
      setCounter(counter + 1)

    }
  }

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter-1)
    }
    else{
      setCounter(counter == 0)
    }
  }

  return (
    <>
     
      <h1>Learning React</h1>
      <h1>Counter Value: {counter}</h1>
      <button
      onClick={addValue}
      >Add Value</button>
      <button
      onClick={removeValue}
      >Remove Value</button>
      
    </>
  )
}

export default App
