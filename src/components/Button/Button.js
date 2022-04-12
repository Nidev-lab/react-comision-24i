import { useState } from "react";

const Button = () => {

  const [res, setRes] = useState(0)

  const handleSuma = () => {
    setRes(res + 1)
  }

  const handleResta = () => {
    setRes(res - 1)
  }

  return (
    <div className="m-5">
      <div className="m-1">
        {res}
      </div>

      <button className="m-1" onClick={handleResta}>Restar</button>
      <button className="m-1" onClick={handleSuma}>Sumar</button>
    </div>
  );
}
 
export default Button;