import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    const newCount = count + 1;
    setCount(newCount);

    console.log({ newCount });
  }

  return <button onClick={handleClick}>{count}</button>;
}

export default App;
