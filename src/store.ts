import { writable } from 'svelte/store'
import type { Items, Discount, TrocoPara, DivideBy, Item } from './types'

interface State {
  list: Items,
  discount: Discount,
  trocoPara: TrocoPara,
  divideBy: DivideBy,
}

const initialState: State = {
  list: [
    { id: '1', title: 'Arroz', quantity: 1, price: 4.00 },
    { id: '2', title: 'Requeijão', quantity: 2, price: 3.50 },
  ],
  discount: null,
  trocoPara: null,
  divideBy: 1,
}

function createStore() {
  const { subscribe, set, update } = writable<State>(
    JSON.parse(localStorage.getItem('data')!) ?? initialState
  )

  subscribe(state => {
    localStorage.setItem('data', JSON.stringify(state))
  })

  return {
    subscribe,
    set,

    addItem() {
      const newItem: Item = {
        id: Math.random().toString(36).substr(2, 9) + Date.now(),
        title: 'Novo produto',
        quantity: 1,
        price: 0,
      }
      update(state => ({
        ...state,
        list: [...state.list, newItem]
      }))
    },

    editItem(idToUpdate: Item['id'], updatedItem: Item) {
      update(state => {
        const index = state.list.findIndex(item => item.id === idToUpdate)
        return {
          ...state,
          list: state.list.splice(index, 1, updatedItem)
        }
      })
    },

    removeItem(idToRemove: Item['id']) {
      update(state => ({
        ...state,
        list: state.list.filter(item => item.id !== idToRemove)
      }))
    },

    reset() {
      set({
        list: [],
        discount: null,
        trocoPara: null,
        divideBy: 1
      })
    },
  }
}

export default createStore()
