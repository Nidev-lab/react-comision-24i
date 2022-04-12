import { useState } from "react";

const UseStateExample = () => {
  const [encender, setEncender] = useState(true)

  const handleEncendido = () => {
    const valor = !encender

    setEncender(valor)
  }

  return (
    <>
      { encender ? 'Encendido' : 'Apagado' }

      <button className="btn btn-primary" onClick={handleEncendido}>Encender / Apagar</button>
    </>
  );
}
 
export default UseStateExample;