import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const [counter, setCounter] = useState(10);

// It will increase value of counter.
  function addValue() {
    if (counter < 20)
      setCounter(counter + 1);
  }

// It will decrase the value of counter.
  function subValue() {
    if (counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
      <h1>Use State hook</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={subValue}>sub value {counter}</button>
      <p>footer : {counter}</p>
      <Link to={'/about'} >About Us Page</Link>
    </>
  )
}

export default Home
