const { loadNuxt, build } = require('nuxt')
const app = require('express')()
const console = require('consola')

const isDev = process.env.NODE_ENV !== 'production'
const port = 3000

async function start() {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  app.use(nuxt.render)

  if (isDev) {
    build(nuxt)
  }

  app.listen(port, '0.0.0.0')

  console.ready({
    message: `Listening on http://localhost:${port}`,
    badge: true,
  })
}

start()
