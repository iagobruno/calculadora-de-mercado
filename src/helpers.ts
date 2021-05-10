import type { Items } from './types'

export const moneyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function formatMoney(value: number) {
  return moneyFormatter.format(value)
}
