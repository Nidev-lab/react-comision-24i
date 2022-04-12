import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [contador, setContador] = useState(1)

  const handleConsoleLog = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${contador}`)
     .then(res => res.json())
     .then(json => console.log(json))
  }

  useEffect(() => {
    handleConsoleLog()
  }, [contador])

  return (
    <>
      <h2>UseEffectExample</h2>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </>
  );
}
 
export default UseEffectExample;