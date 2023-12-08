

export const DetalleDeProducto = ({nombre, precio, imagen, detalle}) => {
  return (
    <div className="border m-5">
<div className="card">
<div className="cad-boddy">
<h3 className="card-title">{nombre}</h3>
<img src={imagen} alt="foto" />
<p className="card-text">{detalle}</p>
<p> Precio: {precio}</p>
</div>
</div>
    </div>
  )
}
