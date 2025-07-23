import { getData } from "../utils/getData.js"
import { parseJSONBody } from "../utils/parseJSONBody.js"
import { sendResponse } from "../utils/sendResponse.js"
import { addNewSighting } from "../utils/addNewSighting.js"
import { sanitizeInput } from "../utils/sanitizeInput.js"

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
        const sanitizedBody = sanitizeInput(parsedBody)
        await addNewSighting(sanitizedBody)
        sendResponse(res, 201, 'application/json', JSON.stringify(sanitizedBody))

    } catch (error) {
        sendResponse(res, 200, 'application/json', JSON.stringify({ error: err }))
    }
}