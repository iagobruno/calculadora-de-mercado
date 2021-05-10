<script lang="ts">
  import type { Items, ItemWithoutId } from '../types'
  import { createEventDispatcher } from 'svelte'
  import { formatMoney, removeLetters } from '../helpers'

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
      {#each list as item (item.id)}
        <tr id={item.id}>
          <td class="item__title">
            <span
              contenteditable
              bind:textContent={item.title}
            />
          </td>
          <td class="item__qtt">
            <span
              contenteditable
              inputmode="numeric"
              on:blur={(evt) =>
                item.quantity = Number(removeLetters(evt.currentTarget.textContent ?? '1'))
              }
            >{item.quantity}</span>
          </td>
          <td class="item__price">
            R$
            <span
              contenteditable
              inputmode="numeric"
              on:blur={(evt) =>
                item.price = Number(removeLetters(evt.currentTarget.textContent ?? '0'))
              }
            >{item.price}</span>
          </td>
          <td
            class="action"
            on:click={() => dispatch('removeItem', item.id)}
          >❌</td>
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
    font-size: 0.94em;
  }

  td.item__price {
    display: flex;
    align-items: center;
    gap: 0px;
  }

  thead th:first-child,
  tbody td:first-child {
    width: 100%;
  }

  thead th:not(:last-child),
  tbody td:not(:last-child) {
    min-width: 60px;
  }

  td span[contenteditable] {
    display: inline-block;
    border-radius: 4px;
    padding: 0 6px;
    min-width: 30px;
  }
  td span[contenteditable]:focus {
    background: rgba(0,0,0,.09);
    outline: none;
  }

  .action {
    cursor: pointer;
  }
</style>
