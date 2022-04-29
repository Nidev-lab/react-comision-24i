import { useState, useEffect } from "react"

const Detail = () => {
  const [personaje, setPersonaje] = useState({})

  const obtenerPersonaje = () => {
    const info = localStorage.getItem('personaje')

    const objetoInfo = JSON.parse(info)

    setPersonaje(objetoInfo)
  }

  useEffect(() => {
    obtenerPersonaje()
  }, [])

  return (
    <section>
      <h2>Detail page</h2>
      <img src={personaje?.image} alt="" />
      <h3>{personaje?.name}</h3>
      <p>{personaje?.species}</p>
      {
        !personaje?.name && <p>No existe personaje</p>
      }
      {
        (personaje?.episode?.map((episodio, i) => <a key={i} href={episodio} className="me-1">{i + 1}</a>)) 
      }
    </section>
  );
}
 
export default Detail;
