import { useState } from "react"
import { MenuItem, OrderItem } from "../types"


export default function useOrder() {
  // este es el estado del carrito
  const [order, setOrder] = useState<OrderItem[]>([]) // esta mamada del los corchetes en el type, no creas que la entendi muy bien.. pero en fin

  // agregar algo a la orden
  const addItem = (item: MenuItem) => {
    const itemExist = order.find(orderItem => orderItem.id === item.id)
    if (itemExist) {
      const updateOrder = order.map(orderItem => orderItem.id === item.id ?
        { ...orderItem, quantity: orderItem.quantity + 1 } :
        orderItem // esta es la funcion que agrega las cantidades, si existe me e agregas uno mas
      )
      setOrder(updateOrder)
    } else {
      const newItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }

    /* el problema es que no le estas diciendo que retorne naranjas en la maldita consola
    console.log(order) */

  }

  // eliminar un elemento de la orden
  const removeItem = (id: MenuItem['id']) => {
    setOrder(order.filter(item => item.id !== id))
  }


  return {
    order,
    addItem, removeItem
  }
}

// aqui es donde ocurre toda la magia.. agregamos y eliminamos mamadas a la orden

/* Primero definimos el state donde vamos a poner los elementos que forman parte de la orden,
  el hook es para la orden, como si fuera el carrito de compras. y por eso lo iniciamos como un empty array o arreglo vacio.
   luego extendemos o creamos un nuevo tupe para la orden para poder agregar la cantidad y que el 'order' del useState no sea de tipo any
*/

/*  los 'generic' te permiten escribir codigo mas flexible y sobretodo.. reutilizable.
  esta rrara esta mamada, pero asi funciona, el generic sirve para estructuras estendidas o mamadas de esas. ya tu sabes..!!
*/

/* 
  con el .find() buscamos si ya existe.. si lo encontraste? perfecto. entonces agregale uno cada vez que el usuario presione sobre el, si no existe entonces agregalo
*/

/* 
  Filtrado de elementos: para eliminar un elemento de la orden

order.filter(item => item.id !== id) crea un nuevo array que contiene todos los elementos de order excepto aquel cuyo id coincide con el id proporcionado.
La función filter itera sobre cada item en el array order y solo incluye aquellos que no tienen el mismo id.
*/

