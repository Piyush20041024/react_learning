import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () =>{
    if(count <20){
      setCount((count) => count + 1);
    }
  }

  const removeValue = () =>{
    if(count >0){
      setCount((count) => count - 1);
    }
  }
  return (
    <>
      <h1>Chai Aur Code</h1>
        <button onClick={addValue}>
          Increase count is {count}
        </button>
        <hr />
        <button onClick={removeValue}>
          Decrease count is {count}
        </button>
    </>
  )
}

export default App
