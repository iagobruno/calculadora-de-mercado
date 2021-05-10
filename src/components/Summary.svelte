<script lang="ts">
  import type { Discount, Items } from '../types'
  import { formatMoney, calcTotal, calcDiscount } from '../helpers'

  // PROPS
  export let list: Items = []
  export let discount: Discount | null = 0
  export let divideBy: number = 1
  export let trocoPara: number | null = null

  // STATES
  $: subtotal = calcTotal(list)
  $: finalDiscount = calcDiscount(discount ?? 0, subtotal)
  $: total = subtotal - finalDiscount
  $: totalDivided = total / divideBy
  $: troco = trocoPara === null ? null : trocoPara - total
</script>

<section class="summary">
  {#if subtotal !== total}
    <div class="summary__row subtotal">
      <span>Subtotal</span>
      <hr />
      <span>{formatMoney(subtotal)}</span>
    </div>
  {/if}

  {#if finalDiscount > 0}
    <div class="summary__row discount">
      <span>Disconto</span>
      <hr />
      <span>{formatMoney(finalDiscount)}</span>
    </div>
  {/if}

  <div class="summary__row total">
    <span>Total</span>
    <hr />
    <span>{formatMoney(total)}</span>
  </div>

  {#if troco !== null}
    <div class="summary__row troco">
      <span>Troco</span>
      <hr />
      <span>{formatMoney(troco)}</span>
    </div>
  {/if}

  {#if divideBy > 1}
    <div class="summary__row">
      <span>Total dividido por {divideBy}</span>
      <hr />
      <span>{formatMoney(totalDivided)}</span>
    </div>
  {/if}
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
