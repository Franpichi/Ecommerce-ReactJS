import { Link } from "react-router-dom"

export const Item = ({item}) => {

  return (
    <div className="card mb-3 cardProducto">
        <img src={item.img} className="card-img-top itemImagen" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body cardBodyDark">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.marca}</p>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <button className="btn-primary"><Link className="nav-link" to={`/item/${item.id}`}>Ver Producto</Link></button>
            </div>
      </div>

  )
}