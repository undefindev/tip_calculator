import { useState } from "react"
import { MenuItem, OrderItem } from "../types"


export default function useOrder() {

  // este es el estado del carrito
  const [order, setOrder] = useState<OrderItem[]>([])

  // y esta la funcion para agregar los articulos al resumen
  const addItem = (item: MenuItem) => {

    const newItem = { ...item, quantity: 1 } // const newItem : OrederItem. tambien seria correcto
    setOrder([...order, newItem])
  }
  return {
    addItem
  }
}

/* Primero definimos el state donde vamos a poner los elementos que forman parte de la orden,
  el hook es para la orden, como si fuera el carrito de compras. y por eso lo iniciamos como un empty array o arreglo vacio.
   luego extendemos o creamos un nuevo tupe para la orden para poder agregar la cantidad y que el 'order' del useState no sea de tipo any
*/

/*  los 'generic' te permiten escribir codigo mas flexible y sobretodo.. reutilizable.
  esta rrara esta mamada, pero asi funciona, el generic sirve para estructuras estendidas o mamadas de esas. ya tu sabes..!!
*/

