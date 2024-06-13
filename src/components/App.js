
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [counter, setcounter] = useState(0)
  const Increase = () =>{
    setcounter(counter+1);
  }
  return (
    <div>
        { <><h1>Counter </h1>
        <p>{counter}</p>
        <button onClick={Increase}>Increase</button></>}
    </div>
  )
}

export default App
