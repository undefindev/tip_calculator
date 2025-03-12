import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import { menuItems } from "./data/db"
import useOrder from "./hookd/useOrder" // importamos el hook


function App() {
  /* console.log(menuItems) */

  // usamos el hook, porque todavia no estamos manejando un estado global
  const { order, addItem, removeItem } = useOrder()


  return (
    <>

      <div>
        <header className="flex items-center justify-between h-10 lg:h-14 border-b px-4">
          <div>
            <p>a la Huevona..!!</p>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              <li>about</li>
              <li>Menu</li>
              <li>Summary</li>
            </ul>
          </div>
        </header>

        {/* wrapper */}
        <main className="flex flex-row h-[calc(100vh-56px)]">
          {/* menu */}
          <div className="w-1/2 overflow-y-scroll box-border">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>

          {/* oreder summary */}
          <div className="w-1/2 flex flex-col">
            <div className="flex-1 overflow-y-scroll box-border p-8">
              <OrderContents
                order={order}
                removeItem={removeItem}
              />
            </div>
            <div>
              <OrderTotals
                order={order}
              />
            </div>
          </div>
        </main>
      </div>

    </>
  )
}

export default App

/* 
  <div className="">
              <h2 className="text-center">
                Menu
              </h2>
            </div>
            <div>
              
            </div>




            <div>
              <h2 className="text-center">
                Order Summary
              </h2>
            </div>
            <div>
              <div>
                1
              </div>
              {/* totals *
              <div>
                
              </div>
            </div>





*/