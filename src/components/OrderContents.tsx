import { OrderItem } from "../types"


type OrderContentsProps = {
  order: OrderItem[]
}
export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
      <div>
        {order.length === 0 ? <p>vacio</p> : (
          order.map(item => (
            <div key={item.id}>
              <p>
                {item.name}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
