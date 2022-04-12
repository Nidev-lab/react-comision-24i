const Information = (data) => {
  return (
    <div className="m-5 w-25">
      <h2>{data.nombre}</h2>
      <h5>Edad: {data.edad} años</h5>
      <h5>Altura: {data.altura}cm</h5>
      <p>{data.descripcion}</p>
    </div>
  );
}
 
export default Information;