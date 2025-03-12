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
      <div className="p-4">
        <h2 className="text-center mb-2">Total & Propina</h2>
        <div className="flex flex-col gap-2 items-end">
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
