<script lang="ts">
  import Header from './components/Header.svelte'
  import Table from './components/Table.svelte'
  import Options from './components/Options.svelte'
  import Summary from './components/Summary.svelte'
  import type { Items, Item, Discount, TrocoPara, DivideBy } from './types'
  // import { state } from './store'

  // STATES
  let list: Items = [
    { id: 1, title: 'Arroz', quantity: 1, price: 4.00 },
    { id: 2, title: 'Requeijão', quantity: 2, price: 3.50 },
  ]
  let discount: Discount = null
  let trocoPara: TrocoPara = null
  let divideBy: DivideBy = 1

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

<Options
  bind:discount
  bind:trocoPara
  bind:divideBy
/>

<hr />

<Summary
  {list}
  {discount}
  {trocoPara}
  {divideBy}
/>

<button
  on:click={handleCleanList}
  disabled={list.length === 0}
  style="--bg-color: #999;"
>Limpar formulário</button>

<center>
  <span>Made by <a href="https://github.com/iagobruno">Iago Bruno</a></span>
  <br />
  <a href="https://github.com/iagobruno/calculadora-de-mercado" class="gh-link">View source on GitHub</a>
</center>


<style>
  center {
    font-size: 0.86em;
  }

  .gh-link {
    text-decoration: none;
    color: #444;
    margin-top: 6px;
    display: block;
  }
</style>
