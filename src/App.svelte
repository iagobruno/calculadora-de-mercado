<script lang="ts">
  import Header from './components/Header.svelte'
  import Table from './components/Table.svelte'
  import Summary from './components/Summary.svelte'
  import type { Items, Item, Discount, TrocoPara, DivideBy } from './types'
  // import { state } from './store'

  // STATES
  let list: Items = [
    { id: 1, title: 'Arroz', quantity: 1, price: 4.00 },
    { id: 2, title: 'Requeijão', quantity: 2, price: 3.50 },
  ]
  let discount: Discount = null
  let trocoPara: TrocoPara = 20
  let divideBy: DivideBy = 5

  function handleAddItem (event: CustomEvent<Item>) {
    const newItem = {
      ...event.detail,
      id: list.length + 1,
    }
    list = [...list, newItem]
  }

  function handleEditItem (idToUpdate: Item['id'], updatedItem: Item) {
    const index = list.findIndex(item => item.id === idToUpdate)

    list.splice(index, 1, updatedItem)
    list = list // force svelte re-render the list
  }

  function handleRemoveItem (idToRemove: Item['id']) {
    list = list.filter(item => item.id !== idToRemove)
  }

  // TODO: Limpar também os valoes "discount" "divideBy" e "trocoPara"
  function handleCleanList () {
    list = []
    discount = null
    trocoPara = null
    divideBy = 1
  }
</script>


<Header />

<Table
  {list}
  on:newItem={handleAddItem}
/>

<hr />

<Summary
  {list}
  {discount}
  {trocoPara}
  {divideBy}
/>

<hr />

<button
  on:click={handleCleanList}
  disabled={list.length === 0}
>Limpar formulário</button>
