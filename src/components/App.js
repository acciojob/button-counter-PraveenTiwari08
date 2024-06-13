
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [counter, setcounter] = useState(0)
  const Increase = () =>{
    setcounter(counter+1);
  }
  return (
    <div>
        { <>
        <p>{`Button clicked ${counter} times`}</p>
        <button onClick={Increase}>Increase</button></>}
    </div>
  )
}

export default App
