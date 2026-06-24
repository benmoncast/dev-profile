import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('.', import.meta.url)), 'dist')
const port = Number(process.env.PORT || 4173)
const host = process.env.HOST || '127.0.0.1'

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
}

function resolveFile(requestUrl) {
  const url = new URL(requestUrl, `http://${host}:${port}`)
  const safePath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '')
  const candidate = join(root, safePath === '/' ? 'index.html' : safePath)

  if (existsSync(candidate) && statSync(candidate).isFile()) {
    return candidate
  }

  return join(root, 'index.html')
}

createServer((request, response) => {
  const filePath = resolveFile(request.url || '/')
  const contentType = contentTypes[extname(filePath)] || 'application/octet-stream'

  response.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': filePath.endsWith('index.html') ? 'no-cache' : 'public, max-age=31536000, immutable',
  })

  createReadStream(filePath).pipe(response)
}).listen(port, host, () => {
  console.log(`Portfolio preview ready at http://${host}:${port}/`)
})
