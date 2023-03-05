import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"
export const Cart = () => {
    const {carrito, totalPrice, emptyCart } = useCarritoContext()
    return(
        <>
            { carrito.length === 0 
              ?
                <>
                    <h2 className="carritoVacio">Carrito vacio</h2>
                    <Link className="nav-link resumenCompra" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
                </>
              : 
                <div className="container cartContainer">
                    {<ItemList products={carrito} plantilla={'itemCart'}/>}
                    <div className="divButtons">
                        <p className="resumenCompra">Resumen de la compra: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <Link className="nav-link resumenCompra" to={'/cart'}><button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button></Link>
                        <Link className="nav-link resumenCompra" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link> 
                        <Link className="nav-link resumenCompra" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link> 
                    </div>
                </div>
            }
        </>
    )
   
}