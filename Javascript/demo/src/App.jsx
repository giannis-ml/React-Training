import { React, useState } from 'react'
import './App.css'

function App() {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    // View: the UI definition
    return (
        <div>
            Value: {counter} <button onClick={increment}>Increment</button>
        </div>
    )
}

export default App
