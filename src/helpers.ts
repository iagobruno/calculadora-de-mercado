import type { Items, Discount } from './types'

export const moneyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function formatMoney(value: number) {
  return moneyFormatter.format(value)
}

export function calcDiscount(discount: number, total: number): number {
  if (discount === null) {
    return 0
  }
  return calcPercentage(discount, total)

  // if (typeof discount === 'number') {
  //   return discount
  // }
  // if (isNumeric(discount)) {
  //   return Number(discount)
  // }
  // if (discount.endsWith('%')) {
  //   const parsedDiscount = Number(discount.split('%')[0])
  //   return calcPercentage(parsedDiscount, total)
  // }
  // // @ts-ignore
  // return discount as number
}

export function calcPercentage(percentage: number, value: number): number {
  return percentage / 100 * value
}

export function calcTotal(list: Items, initialValue = 0): number {
  return list.reduce(
    (total, item) => total + (item.price * item.quantity),
    initialValue
  )
}

function isNumeric(value: string): boolean {
  return /^([0-9])+$/g.test(value)
}

export function removeLetters(str: string) {
  return str.replace(/\,/g, '.').replace(/[^0-9\.]/gi, '')
}
