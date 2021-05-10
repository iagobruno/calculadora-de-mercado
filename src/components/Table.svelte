<script lang="ts">
  import type { Items, ItemWithoutId } from '../types'
  import { createEventDispatcher } from 'svelte'
  import { formatMoney } from '../helpers'

  // PROPS
  export let list: Items = []

  const dispatch = createEventDispatcher()

  function handleButtonClick () {
    const newItem: ItemWithoutId = {
      title: 'Biscoito',
      quantity: 1,
      price: 2.5
    }
    dispatch('newItem', newItem)
  }
</script>

<section class="list">
  <table>
    <thead>
      <th>Produto</th>
      <th>Quant.</th>
      <th>Preço</th>
      <th></th>
    </thead>

    <tbody>
      {#each list as item (item.title)}
        <tr>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td>{formatMoney(item.price)}</td>
          <td>X</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <button on:click={handleButtonClick}>Adicionar produto</button>
</section>

<style>
  table {
    width: -webkit-fill-available;
    margin: 0 -6px;
    border-spacing: 6px;
  }

  thead,
  th {
    text-align: left;
  }

  thead th:first-child,
  tbody td:first-child {
    width: 100%;
  }

  thead th:not(:last-child),
  tbody td:not(:last-child) {
    min-width: 60px;
  }
</style>
