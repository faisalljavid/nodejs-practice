import { createServer } from 'node:http'
import { getDataFromDB } from './database/db.js'

const PORT = 8000

const server = createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    if (req.url === '/api' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(destinations))
    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        const continent = req.url.split('/').pop()
        const filteredData = destinations.filter((destObj) => {
            return destObj.continent.toLowerCase() === continent.toLowerCase()
        })
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(filteredData))
    } else {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 404
        res.end(JSON.stringify({
            error: "not found",
            message: "The requested route does not exist"
        })
        )
    }
})

server.listen(PORT, () => console.log(`Connected on PORT: ${PORT}`))
