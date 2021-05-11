importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js')

self.__WB_DISABLE_DEV_LOGS = true

workbox.precaching.precacheAndRoute([
  '/',
  ...self.__WB_MANIFEST
])
