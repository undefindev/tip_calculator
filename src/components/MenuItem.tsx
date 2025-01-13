import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <>
      <button className="w-full border rounded-lg flex justify-between p-4 hover:bg-neutral-50">
        <p>{item.name}</p>
        <p>{item.price}</p>
      </button>
    </>
  )
}
