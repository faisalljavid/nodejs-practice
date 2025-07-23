import { createServer } from 'node:http'
import { serveStatic } from './utils/serveStatic.js'

const PORT = 8000

const __dirname = import.meta.dirname

const server = createServer(async (req, res) => {
    await serveStatic(req, res, __dirname)
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
