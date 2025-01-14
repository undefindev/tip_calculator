import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hookd/useOrder" // importamos el hook


function App() {
  /* console.log(menuItems) */

  // usamos el hook
  const { addItem } = useOrder()


  return (
    <>
      <div className="max-h-screen flex flex-col container mx-auto px-4 md:px-0">
        <header className="border-b py-2">
          <h1 className="text-center text-2xl font-light">Tip Calculator</h1>
        </header>
        {/* main content */}
        <main className="py-4 divide-y md:divide-y-0 md:py-8 md:divide-x grid md:grid-cols-2">
          {/* left side */}
          <div className="pb-4">
            <h2 className="text-center text-lg font-medium">Menu</h2>
            {/* menu */}
            <div className=" space-y-4 mt-8 mr-4">
              {menuItems.map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))}
            </div>
          </div>
          {/* summary */}
          <div className="pt-4">
            <h2 className="text-center text-lg font-medium">Consumo</h2>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
