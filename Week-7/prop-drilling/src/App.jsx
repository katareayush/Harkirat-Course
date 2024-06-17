import { useState } from "react"
import { CountConttext } from "./content";
import { useContext } from "react";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CountConttext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountConttext.Provider>
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountConttext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(CountConttext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App