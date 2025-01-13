// creamos el type para el menu..
export type MenuItem = {
  id: number,
  name: string,
  price: number
}

// el type del carrito u orden, como quieras llamarle
export type OrderItem = MenuItem & {
  quantity: number
}
// tomamos todo lo de MenuItem y le agregamos la propiedad que faltaba, asi no rescribimos el codigo y son types distintos