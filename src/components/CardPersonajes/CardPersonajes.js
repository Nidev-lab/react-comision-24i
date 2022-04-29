const CardPersonajes = ({ image, name, species, url, id }) => {

  const handleClick = async(id) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const json = await data.json()

    const dataConverted = JSON.stringify(json)

    localStorage.setItem('personaje', dataConverted)

    window.location.href = '/detail'
  }

  return (
    <div className="card col-3">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{species}</p>
        <button onClick={() => handleClick(id)} className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  )
}
 
export default CardPersonajes
