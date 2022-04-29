import { useState, useEffect } from "react";
import axios from "axios";
import CardPersonajes from "../../components/CardPersonajes/CardPersonajes";

const Home = () => {
  const [personajes, setPersonajes] = useState([])
  const [personajesFiltrados, setPersonajesFiltrados] = useState([])

  const obtenerPersonajes = async () => {
    const resp = await axios.get('https://rickandmortyapi.com/api/character')
    setPersonajes(resp.data.results)
    setPersonajesFiltrados(resp.data.results)

    // desestructuracion de datos
    const { url } = resp.data.results[0].name

    console.log(url)
  }

  const handleChange = e => {
    const especie = e.target.value
    const personajesFiltrados = personajes.filter(personaje => personaje.species === especie)

    setPersonajesFiltrados(personajesFiltrados)
  }

  useEffect(() => {
    obtenerPersonajes()
  }, [])

  return (
    <>
      <main>
        <select class="form-select" aria-label="Default select example" onChange={handleChange}>
          <option selected>Open this select menu</option>
          <option value="Human">Humano</option>
          <option value="Alien">Alien</option>
        </select>
        <section className="row gx-0">
          {
            personajesFiltrados.map(personaje => <CardPersonajes key={personaje.id} image={personaje.image} name={personaje.name} species={personaje.species} url={personaje.url} id={personaje.id} />)
          }
        </section>
      </main>
    </>
  );
}

export default Home;
