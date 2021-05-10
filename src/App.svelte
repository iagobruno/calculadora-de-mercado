<script lang="ts">
  import Header from './components/Header.svelte'
  import Table from './components/Table.svelte'
  import Options from './components/Options.svelte'
  import Summary from './components/Summary.svelte'
  import store from './store'
</script>


<Header />

<Table />

<hr />

<Options />

<hr />

<Summary />

<button
  on:click={store.reset}
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
