import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "proyectofinal-pizzichini.firebaseapp.com",
  projectId: "proyectofinal-pizzichini",
  storageBucket: "proyectofinal-pizzichini.appspot.com",
  messagingSenderId: "462309642996",
  appId: "1:462309642996:web:4cd6f999cae0c80d9844a1"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export const cargarBDD = async () => {
    const promise = await fetch('../json/products.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(db,"products"), {
            nombre: prod.nombre,
            marca: prod.marca,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}
export const getProductos = async() => {
    const productos = await getDocs(collection(db,"products"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}
export const getProducto = async(id) => {
    const producto = await getDoc(doc(db, "products", id))
    const item = {...producto.data(), id: producto.id}
    return item
}
export const updateProducto = async(id, info) => {
    await updateDoc(doc(db, "products", id), info)
}
export const deleteProducto = async(id) => {
    await deleteDoc(doc(db, "products", id))
}
export const createOrdenCompra = async(cliente, productos,precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal, 
        fecha: fecha
    })
    return ordenCompra
}
export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
    return oCompra
}