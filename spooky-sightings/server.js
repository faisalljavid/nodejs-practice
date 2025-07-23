import { createServer } from 'node:http'


const PORT = 8000

const server = createServer(async (req, res) => {
    res.statusCode = 200
    res.end(`<html><h1>The server is working</h1></html>`)
})

server.listen(PORT, () => `Listening on PORT: ${PORT}`)