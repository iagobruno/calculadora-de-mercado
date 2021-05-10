<script lang="ts">
  import store from '../store'
</script>

<section class="options">
  <label for="discount-input">
    <span>Disconto:</span>
    <span>
      <input
        type="number"
        id="discount-input"
        bind:value={$store.discount}
        class:invalid={($store.discount ?? 0) < 0 || ($store.discount ?? 0) > 100}
        inputmode="numeric"
        placeholder="0"
        minlength="1"
        maxlength="3"
        min="0"
      />
      %
    </span>
  </label>

  <label for="troco-para-input">
    <span>Troco para:</span>
    <span>
      R$
      <input
        type="number"
        id="troco-para-input"
        bind:value={$store.trocoPara}
        class:invalid={($store.trocoPara ?? 0) < 0}
        inputmode="numeric"
        placeholder="0,00"
        minlength="1"
        min="1"
      />
    </span>
  </label>

  <label for="divide-by-input">
    <span>Dividir para:</span>
    <span>
      <select
        id="divide-by-input"
        bind:value={$store.divideBy}
      >
        <option value="1" default>Sem divisão</option>
        <option value="2">2 Pessoas</option>
        <option value="3">3 Pessoas</option>
        <option value="4">4 Pessoas</option>
        <option value="5">5 Pessoas</option>
        <option value="6">6 Pessoas</option>
        <option value="7">7 Pessoas</option>
        <option value="8">8 Pessoas</option>
        <option value="9">9 Pessoas</option>
        <option value="10">10 Pessoas</option>
      </select>
    </span>
  </label>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    background: rgba(0,0,0,.08);
    border: none;
    border-radius: 4px;
    padding: 0 5px;
    width: 75px;
    line-height: inherit;
    font-size: inherit;
    color: inherit;
  }

  input.invalid {
    box-shadow: 0 0 0 1px red;
    outline: red;
  }

  input#discount-input {
    text-align: right;
    width: 56px;
  }

  select {
    background-color: white;
    border: 1px solid #999;
    border-radius: 4px;
    padding: 3px 3px;
    font-size: 0.8em;
    font-style: inherit;
    color: inherit;
  }
</style>
