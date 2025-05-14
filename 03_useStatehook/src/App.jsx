import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10);

  function addValue() {
    if (counter < 17) {  // Adjust the condition to ensure it doesn't exceed 20
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
    } else if (counter < 20) {  // Ensure it increments up to exactly 20
      setCounter(20);
    }
  }

  function subValue() {
    if (counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
      <h1>Use State hook</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={subValue}>Sub value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App;
