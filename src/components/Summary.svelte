<script lang="ts">
  import { formatMoney, calcTotal, calcDiscount } from '../helpers'
  import store from '../store'

  $: list = $store.list
  $: discount = $store.discount
  $: divideBy = $store.divideBy
  $: trocoPara = $store.trocoPara

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
    <div class="summary__row troco" class:falta={troco < 0}>
      <span>{troco >= 0 ? 'Troco' : 'Falta'}</span>
      <hr />
      <span>{troco === 0 ? 'Sem troco' : formatMoney(Math.abs(troco))}</span>
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

  .summary__row.troco.falta {
    color: red;
  }
  .summary__row.troco.falta hr {
    border-top-color: red;
  }
</style>
