import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"


type OrderTotalsProps = {
  order: OrderItem[]
}
export default function OrderTotals({ order }: OrderTotalsProps) {

  // Calcular el subtotal. 
  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
  return (
    <>
      <div>
        <h2 className="text-center font-semibold mt-8">Total & Propina</h2>
        <div className="flex flex-col items-end space-y-2 mt-4">
          <p>SubTotal: {''}
            <span>${formatCurrency(subtotalAmount)}</span>
          </p>

          <p>Propina: {''}
            <span>$0</span>
          </p>

          <p>Total: {''}
            <span>$0</span>
          </p>
        </div>

        <button></button>

      </div>
    </>
  )
}
