
export default function OrderTotals() {
  return (
    <>
      <div>
        <h2 className="text-center font-semibold mt-8">Total & Propina</h2>
        <div className="flex flex-col items-end space-y-2 mt-4">
          <p>SubTotal: {''}
            <span>$0</span>
          </p>

          <p>Propina: {''}
            <span>$0</span>
          </p>

          <p>Total: {''}
            <span>$0</span>
          </p>
        </div>

      </div>
    </>
  )
}
