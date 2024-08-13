import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
    </>
  )
}

export default App
