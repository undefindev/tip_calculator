import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"


type OrderContentsProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem['id']) => void
}
export default function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div>
      <div>
        {order.length === 0 ? <p>vacio</p> : (
          order.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <p>
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-semibold">
                  {item.quantity} - {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button
                type="reset"
                onClick={() => removeItem(item.id)}
                className="border border-red-500 font-black text-red-500 rounded-full h-8 w-8">
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
