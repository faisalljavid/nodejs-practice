import { getData } from "../utils/getData.js"
import { parseJSONBody } from "../utils/parseJSONBody.js"
import { sendResponse } from "../utils/sendResponse.js"
import { addNewSighting } from "../utils/addNewSighting.js"

// handleGET
export const handleGET = async (res) => {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}

// handlePOST
export const handlePOST = async (req, res) => {
    try {
        const parsedBody = await parseJSONBody(req)
        await addNewSighting(parsedBody)
        sendResponse(res, 201, 'application/json', JSON.stringify(parsedBody))

    } catch (error) {
        sendResponse(res, 200, 'application/json', JSON.stringify({ error: err }))
    }
}