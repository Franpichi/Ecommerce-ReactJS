import { useCarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import  React  from "react"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"
import { useForm } from 'react-hook-form';
import { useState } from "react"

    
export const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [repEmail, setRepEmail] = useState("")

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const repEmailHandler = (event) => {
        setRepEmail(event.target.value)
    }


    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        
        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant
                updateProducto(prodCarrito.id, prodBDD)
            })       
        })

        if (email !== repEmail){
          return  toast.warning(`Debes escribir el mismo email, gracias.`, {position: "top-center"})
        }
        

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
            toast.success(`Gracias por tu compra!! El total es de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} El ID de tu compra es: ${ordenCompra.id
            }`, {
                position: toast.POSITION.TOP_CENTER
            })
            emptyCart()
            e.target.reset()
            navigate("/")
        })

    }


   return (
    <>
        {carrito.length === 0 
         ? 
          <>
                <h2>No posee productos en el carrito</h2>
                <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
          </>
          :
            <div className="container" style={{marginTop:"20px"}}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                <input type="text" className="form-control" name="nombre" required/>
            </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={email} onChange={emailHandler} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Repetir Email</label>
                <input type="email" className="form-control" name="repEmail" value={repEmail} onChange={repEmailHandler} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="celular"className="form-label">Numero telefonico</label>
                <input type="number" className="form-control" name="celular" required />
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Direccion</label>
                <input type="text" className="form-control" name="direccion" required/>
            </div>

            <button type="submit" className="btn btn-dark">Finalizar Compra</button>
            </form>
        </div>
        }
    
    </>
          
   )
}