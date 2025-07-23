import path from 'node:path'
import fs from 'node:fs/promises'
import { randomUUID } from 'node:crypto'
import { getData } from './getData.js'

export const addNewSighting = async (newSighting) => {
    try {
        // Add UUID to the new sighting
        const sightingWithUUID = {
            uuid: randomUUID(),
            ...newSighting
        }

        const sightings = await getData()
        sightings.push(sightingWithUUID)

        const pathJSON = path.join('data', 'data.json')

        await fs.writeFile(
            pathJSON,
            JSON.stringify(sightings, null, 2),
            'utf-8',
        )
    } catch (error) {
        throw new Error(error)
    }
}