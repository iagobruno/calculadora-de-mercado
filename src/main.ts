import App from './App.svelte'

const app = new App({
  target: document.querySelector('main')!
})

export default app


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
  })
}
