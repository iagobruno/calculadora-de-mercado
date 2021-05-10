<script lang="ts">
  import Header from './components/Header.svelte'
  import Table from './components/Table.svelte'
  import type { Items, Item } from './types'
  // import { state } from './store'

  // STATES
  let list: Items = [
    { id: 1, title: 'Arroz', quantity: 1, price: 4.00 },
    { id: 2, title: 'Requeijão', quantity: 2, price: 3.50 },
  ]

  function handleAddItem (event: CustomEvent<Item>) {
    const newItem = {
      ...event.detail,
      id: list.length + 1,
    }
    list = [...list, newItem]
  }

  function handleEditItem (idToEdit: Item['id'], updatedItem: Item) {
    const index = list.findIndex(item => item.id === idToEdit)

    list.splice(index, 1, updatedItem)
    list = list // force svelte re-render the list
  }

  function handleRemoveItem (idToRemove: Item['id']) {
    list = list.filter(item => item.id !== idToRemove)
  }

  // TODO: Limpar também os valoes "discount" "divideBy" e "trocoPara"
  function handleCleanList () {
    list = []
  }
</script>


<Header />

<Table
  {list}
  on:newItem={handleAddItem}
/>

