export interface Item {
  id: number,
  title: string,
  price: number,
  quantity: number,
}

export type ItemWithoutId = Omit<Item, 'id'>

export type Items = Array<Item>

// export type Discount = `${number}%` | `${number}` | number | null
export type Discount = number | null
export type TrocoPara = number | null
export type DivideBy = number
