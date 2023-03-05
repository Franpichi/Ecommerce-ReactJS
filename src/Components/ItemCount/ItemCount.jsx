import { useState } from "react"
import {toast} from 'react-toastify'
export const ItemCount = ({valInicial, stock, onAdd}) => {
    
    const [contador, setContador] = useState(valInicial)

    const sumar = () =>  (contador < stock) && setContador(contador + 1) 
    const restar = () => (contador > valInicial)  && setContador(contador - 1) 
    const agregarCarrito = () => {
      onAdd(contador)
      toast.success('Lo agregaste al carrito con éxito!', {
        position: toast.POSITION.TOP_CENTER
    });
    }

  return (
    <>
        <button className="btn btn-dark" onClick={() => restar()}>Disminuir</button>
          {contador}
        <button className="btn btn-dark" onClick={() => sumar()}>Agregar</button>
        <button className="btn btn-dark" onClick={() => agregarCarrito()}>Agregar al carrito</button>
    </>
  )
}