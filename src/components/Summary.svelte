<script lang="ts">
  import type { Items } from '../types'
  import { formatMoney, calcTotal, calcPercentage } from '../helpers'

  // PROPS
  export let list: Items = []
  // STATES
  $: subtotal = calcTotal(list)

<section class="summary">
  {#if subtotal !== total}
    <div class="summary__row subtotal">
      <span>Subtotal</span>
      <hr />
      <span>{formatMoney(subtotal)}</span>
    </div>
  {/if}


  <div class="summary__row total">
    <span>Total</span>
    <hr />
    <span>{formatMoney(total)}</span>
  </div>
</section>

<style>
  .summary {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 2px;
  }

  .summary__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .summary__row hr {
    border-top-style: dashed;
    width: -webkit-fill-available;
    margin-top: 3px;
  }

  .summary__row span {
    white-space: nowrap;
  }

  .summary__row.total {
    font-weight: bold;
    font-size: 1em;
    margin-bottom: 6px;
  }
</style>
