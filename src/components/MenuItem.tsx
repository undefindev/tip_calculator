import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void // a esto se le conoce como signature o firma

}

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <>
      <button
        onClick={() => addItem(item)}
        className="w-full rounded-lg flex justify-between p-4 hover:bg-sky-100"
      >
        <p>{item.name}</p>
        <p>${item.price}</p>
      </button>
    </>
  )
}

/* 
  el addItem lo tenemos aqui porque cada elemento del menu lo necesita en el onClick
  el objetivo es que cada vez que presionemos un elemento del menu se agrege al resumen. id, nombre y precio
*/